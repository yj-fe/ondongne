import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from 'components/layout/Layout/Layout'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as B from 'components/commonUi/Button';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Confirm from 'components/commonUi/Confirm';
import { CouponTitleInput } from 'components/commonUi/Input';
import CouponAlert from 'components/commonUi/CouponAlert';

function BusinessCouponUpload() {


  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [modal, setModal] = useState(false);
  const [confirm, setConfirm] = useState(null);
  const openModal = () => {
    return setModal({
      onButtonClick: () => setModal(null),
      onOverlayClick: () => setModal(null),
    })
  }
  const modules = useMemo(
    () => ({
        toolbar: {
          container: [
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ size: ["small", false, "large", "huge"] }, { color: [] }],
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
                { align: [] },
            ],
            ["image", "video"],
          ],
        },
    }), []);

  return (
    <div>
      <Layout
          title="쿠폰소식 등록"
          cart={false}
          bell={false}
          onBackClick={() => {navigate(-1); }}
      >
        <L.Container>
          <L.Contents _padding='0px'>
            <CouponTitleInput
              placeholder='제목을 입력해 주세요.'
            />
          </L.Contents>
        </L.Container>
        <L.Container _padding="0px" _gap='0px' _height='850px'>
          <L.Contents _padding="0px" _height='100%'>
            <ReactQuill
              theme="snow"
              value={value}
              modules={modules}
              onChange={setValue}
            />
          </L.Contents>



          <B.CouponButton
          onClick={openModal}
          >
            쿠폰 등록하기
          </B.CouponButton>
    {
        modal &&
        <CouponAlert
          onButtonClick={modal.onButtonClick}
          onOverlayClick={modal.onOverlayClick}
        />
    }
          <B.FixedActionButton>완료</B.FixedActionButton>
        </L.Container>
      </Layout>
      {
        confirm &&
        <Confirm
        />
      }
    </div>
  )
}

export default BusinessCouponUpload