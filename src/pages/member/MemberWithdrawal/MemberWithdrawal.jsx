import React, { useState } from "react";
import { ReactComponent as Check } from "assets/login/checkgray.svg";
import { ReactComponent as Checked } from "assets/login/checked.svg";
import {
  ButtonDiv,
  CheckForm,
  TextInfo,
  TextTitle,
  TextTitleBold,
  TextTitleNomal,
  InfoText,
  InfoTitle,
  CheckTitleDiv,
  CheckStyle,
  CheckTitle,
} from "./MemberWithdrawalStyle";
import ModalDelete from "components/Main/Cart/ModalDelete/ModalDelete";
import { memberDelete } from "service/member";
import SimpleConfirm from "components/commonUi/SimpleConfirm";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "store/slices/auth";
import Layout from "components/layout/Layout/Layout";
import * as L from "components/commonUi/Layout";
import * as I from "components/commonUi/Input";

function MemberWithdrawal() {
  const [confirm, setConfirm] = useState(null);
  const [check, setCheck] = useState(false);
  const [btn, setBtn] = useState(false);
  const [modal, setModal] = useState(false);
  const [deleteReason, setDeleteReason] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const ShowDeleteModal = () => {
    setModal(!modal);
  };
  const PropsModal = () => {
    setModal(!modal);
  };
  const PropsWithdrwal = async () => {
    await memberDelete(deleteReason)
      .then((res) => {
        setConfirm({
          contents: res.data.message,
          confirmText: "확인",
          onConfirmClick: () => {
            if (res.data.data) dispatch(authActions.logout());
            navigate("/");
          },
        });
      })
      .catch((e) => {
        setConfirm({
          contents: "회원 탈퇴 중 오류가 발생하였습니다.",
          confirmText: "확인",
          onConfirmClick: () => {
            navigate("/");
          },
        });
      })
      .finally(() => setModal(false));
  };

  return (
    <div>
      <Layout
        title="회원탈퇴"
        cart={false}
        bell={false}
        onBackClick={() => navigate(-1)}
      >
        <L.Container>
          <L.Contents _height="calc(100vh - 68px)">
            <L.FlexCols _padding={0} _gap={40}>
              {/* ============ 회원탈퇴 ============ */}
              <L.FlexCols>
                <TextTitle>
                  <TextTitleBold>
                    <p>온동네마켓을 탈퇴하시면</p>
                    <p>더 좋은 상품을 못 만나실 수 있어요 :(</p>
                  </TextTitleBold>
                  <TextTitleNomal>
                    탈퇴한 아이디는 본인과 타인 모두 재사용 및 복구가 불가하오니
                    신중하게 선택하시기 바랍니다.
                  </TextTitleNomal>
                </TextTitle>
              </L.FlexCols>

              <L.FlexCols>
                <TextInfo>
                  <InfoTitle>[회원 탈퇴 시 유의사항]</InfoTitle>
                  <InfoText>
                    <p>
                      1. 탈퇴 후 회원님이 직접 등록하신 데이터는 모두 삭제
                      처리되며, 재 가입 시 확인이 불가합니다.
                    </p>
                    <p>2. 탈퇴 후 동일 아이디로 재 가입이 불가합니다.</p>
                  </InfoText>
                </TextInfo>
              </L.FlexCols>

              <L.BottomCols>
                <L.FlexCols>
                  <CheckForm>
                    <CheckTitleDiv
                      onClick={() => {
                        setCheck((s) => !s);
                        setBtn((s) => !s);
                      }}
                    >
                      <CheckStyle id="confirm" type="button">
                        {check ? <Checked /> : <Check />}
                      </CheckStyle>
                      <CheckTitle>
                        유의사항을 모두 확인하였으며, 탈퇴 시 포인트, 쿠폰
                        소멸에 동의합니다.
                      </CheckTitle>
                    </CheckTitleDiv>
                    <I.Textarea
                      _size="14"
                      placeholder="탈퇴 사유를 입력해 주세요."
                      value={deleteReason}
                      onChange={(e) => setDeleteReason(e.target.value)}
                    />
                  </CheckForm>
                  <ButtonDiv
                    type="button"
                    btn={btn}
                    disabled={!btn}
                    onClick={ShowDeleteModal}
                  >
                    회원탈퇴
                  </ButtonDiv>
                </L.FlexCols>
              </L.BottomCols>

              {modal && (
                <ModalDelete
                  PropsWithdrwal={PropsWithdrwal}
                  PropsModal={PropsModal}
                  closeText="취소"
                  buttonText="탈퇴하기"
                  titleText="정말로 탈퇴하시겠습니까?"
                />
              )}
              {confirm && (
                <SimpleConfirm
                  contents={confirm.contents}
                  confirmText={confirm.confirmText}
                  onConfirmClick={confirm.onConfirmClick}
                  warn={confirm.warn}
                  active={confirm.active}
                />
              )}
            </L.FlexCols>
          </L.Contents>
        </L.Container>
      </Layout>
    </div>
  );
}

export default MemberWithdrawal;
