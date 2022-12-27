import React, { useState } from 'react'
import BasicHeader from 'components/Main/Main/BasicHeader/BasicHeader'
import { ReactComponent as Check } from 'assets/login/checkgray.svg'
import { ReactComponent as Checked } from 'assets/login/checked.svg'
import {InputDiv,MemberBody,MemberContainer,WithdrawalDiv1,WithdrawalDiv2,ButtonDiv,CheckForm,TextDiv1,TextDiv2,TextInfo,TextTitle,TextTitleBold,TextTitleNomal,InfoText,InfoTitle, CheckTitleDiv,CheckInput,CheckStyle,CheckTitle} from './MemberWithdrawalStyle'
import ModalDelete from 'components/Main/Cart/ModalDelete/ModalDelete'


function MemberWithdrawal() {

  const [check, setCheck] = useState(false)
  const [btn, setBtn] = useState(false)
  const [modal, setModal] = useState(false);

  const ShowDeleteModal = () => {
    setModal(!modal);
  }
  const PropsModal = () => {
    setModal(!modal);
  }
  const PropsWithdrwal = () => {

  }
 
  return (
    <div>
      <BasicHeader title="회원탈퇴"/>
      <MemberBody>

{/* ============ 회원탈퇴 ============ */}
        <MemberContainer>
          <WithdrawalDiv1>
            <TextTitle>
              <TextTitleBold>
              <p>온동네마켓을 탈퇴하시면</p>
              <p>더 좋은 상품을 못 만나실 수 있어요 :(</p>
              </TextTitleBold>
              <TextTitleNomal>탈퇴한 아이디는 본인과 타인 모두 재사용 및 복구가 불가하오니 신중하게 선택하시기 바랍니다.</TextTitleNomal>
            </TextTitle>

            <TextInfo>
              <InfoTitle>[회원 탈퇴 시 유의사항]</InfoTitle>
              <InfoText>
                <p>1. 탈퇴 후 회원님이 직접 등록하신 데이터는 모두 삭제 처리되며, 재 가입 시 확인이 불가합니다.</p>
                <p>2. 탈퇴 후 동일 아이디로 재 가입이 불가합니다.</p>
              </InfoText>
            </TextInfo>

          </WithdrawalDiv1>


          <WithdrawalDiv2>
            <CheckForm>
              <CheckTitleDiv>
                <CheckStyle
                  id="confirm"
                  type="button"
                  onClick={() => {setCheck((s) => !s); setBtn((s)=>!s)}}
                >
                  {check ? <Checked /> : <Check />}
                </CheckStyle>
                <CheckTitle>유의사항을 모두 확인하였으며, 탈퇴 시 포인트, 쿠폰 소멸에 동의합니다.</CheckTitle>
              </CheckTitleDiv>
              <InputDiv>
              <CheckInput
                placeholder="탈퇴 사유를 입력해 주세요."
              >
              </CheckInput>
              </InputDiv>
            </CheckForm>
            <ButtonDiv
              type="button"
              btn={btn}
              onClick={ShowDeleteModal}
            >
              회원탈퇴
            </ButtonDiv>
          </WithdrawalDiv2>

        </MemberContainer>
      </MemberBody>
          {modal && <ModalDelete PropsWithdrwal={PropsWithdrwal} PropsModal={PropsModal} closeText="취소" buttonText="탈퇴하기" titleText="정말로 탈퇴하시겠습니까?"/>}
    </div>
  )
}

export default MemberWithdrawal