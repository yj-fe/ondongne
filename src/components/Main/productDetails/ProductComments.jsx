import React, { useState, useEffect, useRef } from "react";
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as I from 'components/commonUi/Input';
import styled from "styled-components";
import Avatar from 'assets/common/avatar.png';
import { commentDelete, commentUpdate, commentWriter, getCommentList } from "service/comment";
import Alert from "components/commonUi/Alert";
import Confirm from "components/commonUi/Confirm";
import { Cancel, More } from "components/commonUi/Icon";
import CommentBottomSheet from "./CommentBottomSheet";
import { useSelector } from 'react-redux';
import Moment from "react-moment";
import 'moment/locale/ko'
import ReportAlert from "components/commonUi/ReportAlert";

const writerError = "댓글 등록 중 오류가 발생하였습니다.";
const updateError = "댓글 수정 중 오류가 발생하였습니다.";
const deleteError = "댓글 삭제 중 오류가 발생하였습니다.";
const IMGURL = "https://ondongne-bucket.s3.ap-northeast-2.amazonaws.com/member/profile/";

const ProductComments = ({ id }) => {

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const ref = useRef(null);
    const [data, setData] = useState({
        itemId: id,
        itemCommentId: '',
        contents: '',
        parentsId: '',
        replyer: '',
    });
    const [list, setList] = useState([]);
    const [count, setCount] = useState(0);
    const [alert, setAlert] = useState(null);
    const [loading, setLoading] = useState(false);
    const [mode, setMode] = useState(0);

    // 댓글 목록 조회
    const getComments = async () => {
        const response = await getCommentList(id)
        if (response && response.data.data) {
            let totalCount = 0;
            list.forEach(item => totalCount += item.childs.length)
            setCount(totalCount + Number(list.length));
            setList(response.data.data)
            setData({
                itemId: id,
                itemCommentId: '',
                contents: '',
                parentsId: '',
                replyer: '',
            })
            setMode(0);
        }
    }

    // 댓글 작성
    const writer = async () => {
        if (!data.contents) return;
        setLoading(true);
        const response = await commentWriter(data);
        if (!response) {
            errorMessage(writerError)
        }
        if (!response.data.data) {
            errorMessage(writerError)
        }
        getComments();
        setLoading(false);
    }

    // 댓글 수정 핸들러
    const updateHandler = (item) => {
        setData({
            ...data,
            itemCommentId: item.itemCommentId,
            contents: item.contents,
            parentsId: '',
            replyer: '',
        })

        setMode(1);
        ref.current.focus();
    }

    // 댓글 수정 캔슬
    const updateCancel = () => {
        setData({
            ...data,
            itemCommentId: '',
            contents: '',
            parentsId: '',
            replyer: '',
        })
        setMode(0);
    }

    // 댓글 수정
    const update = async () => {
        if (!data.contents) return;

        setLoading(true);
        const response = await commentUpdate(data);
        if (!response) {
            errorMessage(updateError)
        }
        if (!response.data.data) {
            errorMessage(updateError)
        }
        getComments();
        setLoading(false);
    }

    // 댓글 삭제
    const remove = async (id) => {
        const response = await commentDelete(id);
        if (!response) {
            errorMessage(deleteError)
        }
        if (!response.data.data) {
            errorMessage(deleteError)
        }
        getComments();
    }

    // 에러 메세지
    const errorMessage = (message) => {
        setAlert({
            contents: message,
            buttonText: "확인",
            onButtonClick: () => setAlert(null),
            onOverlayClick: () => setAlert(null),
        })
    }

    // 대댓글
    const replyHandler = (id, name) => {
        setData({
            ...data,
            replyer: name,
            parentsId: id,
        })

        ref.current.focus();
    }

    // 대댓글 취소
    const replyCancel = () => {
        setData({
            ...data,
            itemCommentId: '',
            replyer: '',
        })
    }

    useEffect(() => {
        getComments();
    }, [])

    return (
        <div style={{ position: 'relative' }}>
            <L.FlexCols _gap={12}>
                <L.FlexRows _gap={'0'}>
                    <T.Text _size={15}>댓글 </T.Text>
                    <T.Text _size={15} _weight={600}>{count}</T.Text>
                    <T.Text _size={15}>건</T.Text>
                </L.FlexRows>
                <L.Line />
                <L.FlexCols _gap={20}>
                    {
                        list.length == 0 &&
                        <L.FlexRows _items='center' _content='center' _height='150px'>
                            <T.Text _size={14} _weight={400} _color={'gray600'}>등록된 댓글정보가 없습니다.</T.Text>
                        </L.FlexRows>
                    }
                    {
                        list.length > 0 &&
                        list.map(item => (
                            <>
                                {/* ================ 댓글 ================= */}
                                <Comments
                                    item={item}
                                    child={false}
                                    replyHandler={() => replyHandler(item.itemCommentId, item.nickname)}
                                    updateHandler={updateHandler}
                                    remove={remove}
                                />
                                {/* ================ 대댓글 ================= */}
                                {
                                    item.childs.length > 0 &&
                                    item.childs.map(child => (
                                        <Comments
                                            item={child}
                                            child={true}
                                            replyHandler={() => replyHandler(item.itemCommentId, child.nickname)}
                                            updateHandler={updateHandler}
                                            remove={remove}
                                        />
                                    ))
                                }
                            </>
                        ))
                    }
                </L.FlexCols>
            </L.FlexCols>
            {
                isAuthenticated &&

                <ButtonStyle>
                    {
                        data.parentsId && data.replyer &&
                        <ReplyBox>
                            <L.FlexRows _content='flex-start' _gap={4}>
                                <T.Text _size={14} _weight={600} _color='white'>@{data.replyer}</T.Text>
                                <T.Text _size={14} _weight={400} _color='white'>님에게 답변 남기기</T.Text>
                            </L.FlexRows>
                            <button
                                type="button"
                                onClick={replyCancel}
                            >
                                <Cancel />
                            </button>
                        </ReplyBox>
                    }
                    <DetailButtonDiv>
                        <L.FlexRows _content='space=between'>
                            <I.TextInput
                                ref={ref}
                                _borcolor='#F5F5F5'
                                _boccolor='#F5F5F5'
                                value={data.contents}
                                onChange={e => setData({ ...data, contents: e.target.value })}
                                placeholder='댓글을 입력해주세요.'
                            />

                            <L.FlexRows _content='right' _width={mode === 0 ? '71px' : '140px'}>
                                <DetailButtonStyle
                                    type='button'
                                    disabled={loading}
                                    onClick={mode === 0 ? writer : update}
                                    size='15px' height='44px'
                                >
                                    {
                                        mode === 0
                                            ? '남기기'
                                            : '수정'
                                    }
                                </DetailButtonStyle>
                                {
                                    mode === 1 &&
                                    <DetailButtonStyle
                                        type='button'
                                        onClick={updateCancel}
                                        size='15px' height='44px' bg='#D32F2F'
                                    >
                                        취소
                                    </DetailButtonStyle>
                                }
                            </L.FlexRows>

                        </L.FlexRows>
                    </DetailButtonDiv>
                </ButtonStyle>
            }
            {
                alert &&
                <Alert
                    title={alert.title}
                    contents={alert.contents}
                    desc={alert.desc}
                    buttonText={alert.buttonText}
                    onButtonClick={alert.onButtonClick}
                    onOverlayClick={alert.onOverlayClick}
                />
            }
        </div>
    )
}


const Comments = ({ item, child, replyHandler, updateHandler, remove }) => {

    const memberId = useSelector(state => state.auth.id);
    const [confirm, setConfirm] = useState(null);
    const [modal, setModal] = useState(false);
    const [report, setReport] = useState(null);


    // 댓글 삭제 confirm
    const removeConfirm = (id) => {
        setConfirm({
            contents: `정말로 댓글을 삭제하시겠습니까?\n 삭제하시면 관련댓글과 함께 삭제됩니다.`,
            onConfirmClick: () => {
                remove(id);
                setConfirm(null);
                setModal(false);
            },
            onCancelClick: () => {
                setConfirm(null);
            }
        });
    }

    useEffect(() => {
        if (report) {
            setConfirm(false);
            setModal(false);
        }
    }, [report])

    return (
        <>
            <L.FlexRows key={item.itemCommentId} _gap={16} _padding={child ? '0 0 0 36px' : '0px'}>
                <ProfileImg src={item.profile ? IMGURL + item.profile : Avatar} />
                <L.FlexRows _items='baseline'>
                    <L.FlexCols>
                        <L.FlexRows _items='center' _content='left'>
                            <T.Text _size={16} _weight={600}>{item.nickname}</T.Text>
                            <T.Text _size={12} _weight={400} _color={'gray500'}>
                                <CreatedAt date={item.createDate} />
                            </T.Text>
                        </L.FlexRows>
                        <T.Text _size={15} _weight={400} _color='gray800'>{item.contents}</T.Text>
                        {
                            memberId &&
                            <L.FlexRows>
                                <T.Text
                                    onClick={replyHandler}
                                    _size={13} _weight={500} _color='gray500'
                                >
                                    댓글달기
                                </T.Text>
                            </L.FlexRows>
                        }
                    </L.FlexCols>
                    {
                        memberId &&
                        <button type="button" onClick={() => setModal(true)}>
                            <More />
                        </button>
                    }
                </L.FlexRows>
            </L.FlexRows>
            {
                report &&
                <ReportAlert
                    onOverlayClick={() => setReport(null)}
                    onCloseClick={() => setReport(null)}
                    id={report}
                    type={"COMMENT"}
                />
            }

            <CommentBottomSheet
                active={modal}
                remove={() => removeConfirm(item.itemCommentId)}
                update={() => updateHandler(item)}
                closeModal={() => setModal(false)}
                isMe={item.memberId == memberId}
                report={() => setReport(item.itemCommentId)}
            />
            {
                confirm &&
                <Confirm
                    warn={confirm.warn}
                    contents={confirm.contents}
                    confirmText={confirm.confirmText}
                    cancelText={confirm.cancelText}
                    onConfirmClick={confirm.onConfirmClick}
                    onCancelClick={confirm.onCancelClick}
                />
            }
        </>
    )
}

const CreatedAt = ({ date }) => {
    let startTime = new Date(date);
    let nowTime = Date.now();

    // 방금전
    if (parseInt(startTime - nowTime) > -60000) {
        return <Moment format="방금 전">{startTime}</Moment>;
    }

    // 3일 후 날짜 표시
    if (parseInt(startTime - nowTime) < (-86400000 * 3)) {
        return <Moment format="YY.MM.DD">{startTime}</Moment>;
    }

    // 3일전 일, 시간, 분 표시
    if (parseInt(startTime - nowTime) > (-86400000 * 3)) {
        return <Moment fromNow>{startTime}</Moment>;
    }
};


const ReplyBox = styled.div`
    width: 100%;
    background: #2DAC9E;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
`

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

const ButtonStyle = styled.div`
  position: fixed;
  bottom: 0;
  margin: 0 auto;
  left: 0;
  right: 0;
  max-width: 728px;
  justify-items: center;
  width: 100%;
    z-index: 100;
`
const DetailButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 20px;
  gap: 8px;
  width: 100%;
  height: 70px;
  background: #FFFFFF;
  box-shadow: 0px -3px 16px rgba(0, 0, 0, 0.08);
`

const DetailButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.width || '100%'};

  height: ${props => props.height || '48px'} ;
  bottom: 0;
  background: ${props => props.bg || '#0B806F'};
  border-radius: 4px;

  font-weight: 700;
  font-size:  ${props => props.size || '18px'};
  line-height: 26px;
  color: #FFFFFF;
`

export default ProductComments;