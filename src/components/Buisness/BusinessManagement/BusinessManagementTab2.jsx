import React, { useState, useEffect } from 'react'
import { ReactComponent as Right } from "assets/main/right.svg";
import { ReactComponent as Down } from "assets/icons/arrow/Arrow-Down.svg";
import { Text } from 'components/commonUi/Text';

import { BankListDiv, BankToggleDiv, TextCenter, InfoBoxDiv, TabDiv, TabContent, ContentDiv, ContentTitle, TitleInfo, TitleInfoDiv, RightStyle, TabBtn, InputBox, Input, FileForm } from './BusinessManagementTabStyle'
import { useSelector } from 'react-redux';
import { getBiz } from 'service/biz';
import { useNavigate } from 'react-router-dom';
import { businessNumberFormatter, fileFormatter } from 'utils/utils';
import DaumPost from 'components/DaumPost';


function BusinessManagementTab2() {
  const navigate = useNavigate();
  const auth = useSelector(state => state.auth)
  const [select, setSelect] = useState(false)
  const [biz, setBiz] = useState({});
  const [isDaumPost, setIsDaumPost] = useState(false);
  const [daumPostAddress, setDaumPostAddress] = useState('');
  // 파일
  const [files, setFiles] = useState([]);
  const [deleteFiles, setDeleteFiles] = useState([]);
  const [fileErrorMessage, setFileErrorMessage] = useState('');

  // 카테고리 데이터
  const [category, setCategory] = useState();

  const onChange = (e) => {
    const { name, value } = e.target;
    setBiz({ ...biz, [name]: value });
  }

  //비즈 파일 삭제
  const deleteFile = id => {
    console.log(id);
    setDeleteFiles({
      ...deleteFiles,
      id
    })

    setBiz({
      ...biz,
      bizFiles: biz.bizFiles.filter(item => item.bizFileId !== id)
    })
  }

  // 비즈 수정 완료
  const bizUpdate = async () => {
    const response = await bizUpdate(biz, files, deleteFiles);
    console.log(response);
    const {data, message, code} = response.data;
  }

  const bizMember = async () => {
    const response = await getBiz();
    const { data } = response.data;
    if (!data) {
      navigate("/");
    }

    console.log(data);

    setBiz(data);
  }

  useEffect(() => {
    if (auth.isAuthenticated) bizMember()
  }, [auth])

  useEffect(() => {
    setBiz({
      ...biz,
      address: daumPostAddress,
      bank: category,
    });
  }, [daumPostAddress, category])

  return (
    <div>
      <TabDiv>

        <TabContent>
          <ContentDiv>
            <ContentTitle>대표자 명</ContentTitle>
            <TitleInfoDiv>
              <Input
                name='ceo'
                value={biz.ceo}
                onChange={onChange}
                placeholder="대표자 명 입력"
              />
            </TitleInfoDiv>
          </ContentDiv>
          <ContentDiv>
            <ContentTitle>전화번호</ContentTitle>
            <TitleInfoDiv>
              <Input
                name='phone'
                value={biz.phone}
                onChange={onChange}
                placeholder="전화번호 입력"
              />
            </TitleInfoDiv>
          </ContentDiv>
          <ContentDiv>
            <ContentTitle>주소</ContentTitle>
            <TitleInfoDiv
              onClick={() => setIsDaumPost(true)}
            >
              <TitleInfo>{biz.address ?? '우편번호 검색'}</TitleInfo>
              <RightStyle><Right /></RightStyle>
            </TitleInfoDiv>
            <TitleInfoDiv>
              <Input
                name='addressDetails'
                value={biz.addressDetails}
                onChange={onChange}
                placeholder="상세주소 입력"
              />
            </TitleInfoDiv>
          </ContentDiv>
          <ContentDiv>
            <ContentTitle>사업자등록번호</ContentTitle>
            <TitleInfoDiv>
              <Input
                name='businessNumber'
                value={biz.businessNumber}
                maxLength={12}
                placeholder="사업자 등록 번호 입력"
                onChange={e => {
                  setBiz({
                    ...biz,
                    businessNumber: businessNumberFormatter(e.target.value)
                  })
                }}
              />
            </TitleInfoDiv>
          </ContentDiv>
          <ContentDiv>
            <ContentTitle>통장 정보</ContentTitle>
            <InfoBoxDiv>
              <TitleInfo>{biz.bank ?? '은행 선택'}</TitleInfo>
              <RightStyle
                onClick={() => setSelect(!select)}
              ><Down /></RightStyle>
            </InfoBoxDiv>
            {select && <BankToggle close={() => setSelect(false)} data={category} setData={setCategory} />}

            <InfoBoxDiv>
              <Input
                name='accountNumber'
                value={biz.accountNumber}
                placeholder='-를 제외한 계좌번호 입력'
                onChange={onChange}
              />
            </InfoBoxDiv>
          </ContentDiv>
          <ContentDiv>
            <ContentTitle>첨부파일</ContentTitle>
            <Text _size={14} _color={'gray600'} >사업자 관련 파일 첨부(파일은 pdf, jpg, png만 첨부 가능)</Text>
            <TextCenter
              for={"files"}
            >
              <TitleInfo >파일 첨부</TitleInfo>
            </TextCenter>
            {fileErrorMessage && <Text as="p" _size={13} _weight={400} style={{ color: '#D32F2F' }} >{fileErrorMessage}</Text>}
            <input type="file" id="files" onChange={e => {
              if (files.length === 5) {
                return setFileErrorMessage('최대 5개까지 추가 가능합니다.')
              }
              setFiles([...files, e.target.files[0]])
            }} />
            {
              files.length > 0 &&
              <FileForm>
                {files.map(file => (
                  <div>
                    <p>{file.name}</p>
                    <button
                      type='button'
                      onClick={() => setFiles(files.filter(item => item.name !== file.name))}
                    >x</button>
                  </div>
                ))}
              </FileForm>
            }
            {
              biz.bizFiles && biz.bizFiles.length > 0 &&
              <FileForm>            
                {/* 저장되어있는 파일 */}
                {biz.bizFiles.map(file => (
                  <div>
                    <p>{file.originalName}</p>
                    <button
                      type='button'
                      onClick={()=>deleteFile(file.bizFileId)}
                    >x</button>
                  </div>
                ))}
              </FileForm>
            }
          </ContentDiv>


        </TabContent>


        <TabBtn onClick={bizUpdate}>수정 완료</TabBtn>

      </TabDiv>
      {
        isDaumPost &&
        <DaumPost
          closeModel={() => setIsDaumPost(false)}
          setAddress={setDaumPostAddress}
        />
      }
    </div>
  )
}

function BankToggle({ close, data, setData }) {

  const onSelect = (value) => {
    setData(value)
    close();
  }

  return (
    <div>
      <BankToggleDiv>
        <BankListDiv onClick={() => onSelect('NH은행')}>
          <TitleInfo
            weight={data == 'NH은행' && 600}
            color={data == 'NH은행' && '#0B806F'}
          >NH은행</TitleInfo>
        </BankListDiv>
        <BankListDiv onClick={() => onSelect('우리은행')}>
          <TitleInfo
            weight={data == '우리은행' && 600}
            color={data == '우리은행' && '#0B806F'}
          >우리은행</TitleInfo>
        </BankListDiv>
        <BankListDiv onClick={() => onSelect('국민은행')}>
          <TitleInfo
            weight={data == '국민은행' && 600}
            color={data == '국민은행' && '#0B806F'}
          >국민은행</TitleInfo>
        </BankListDiv>
        <BankListDiv onClick={() => onSelect('하나은행')}>
          <TitleInfo
            weight={data == '하나은행' && 600}
            color={data == '하나은행' && '#0B806F'}
          >하나은행</TitleInfo>
        </BankListDiv>
      </BankToggleDiv>
    </div>
  )
}

export default BusinessManagementTab2