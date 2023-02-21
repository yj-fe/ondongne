import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from 'components/layout/Layout/Layout'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import * as B from 'components/commonUi/Button';
import 'react-quill/dist/quill.snow.css';
import Confirm from 'components/commonUi/Confirm';
import { CouponTitleInput } from 'components/commonUi/Input';
import CouponAlert from 'components/commonUi/CouponAlert';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Display } from '../BusinessPageStyle';


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
        completed={true}
        bottom={'1px solid #EEEEEE'}
        onBackClick={() => { navigate(-1); }}
      >
        <L.Container >
          <L.Contents _padding='0px'>
            <CouponTitleInput
              placeholder='제목을 입력해 주세요.'
            />
          </L.Contents>
        </L.Container>
        <L.Container _gap='8px' _height='calc(100vh - 230px)'>
          <L.Contents _padding="0px" _height='100%'>
            <Display _displaynone='none' _display='display'>
              <CKEditor
                editor={ClassicEditor}
                config={{
                  extraPlugins: [(function (editor) {
                    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
                      // return customUploadAdapter(loader);
                    }
                  })],
                }}
                // data={data.description}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setValue(data);
                }}
                // 높이
                onReady={(editor) => {
                  editor.editing.view.change((writer) => {
                    writer.setStyle(
                      "height",
                      "calc(100vh - 277px)",
                      editor.editing.view.document.getRoot()
                    );
                  });
                }}
              />
            </Display>
            <Display _displaynone='display' _display='none'>
              <CKEditor
                editor={ClassicEditor}
                config={{
                  extraPlugins: [(function (editor) {
                    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
                      // return customUploadAdapter(loader);
                    }
                  })],
                }}
                // data={data.description}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setValue(data);
                }}
                // 높이
                onReady={(editor) => {
                  editor.editing.view.change((writer) => {
                    writer.setStyle(
                      "height",
                      "calc(100vh - 220px)",
                      editor.editing.view.document.getRoot()
                    );
                  });
                }}
              />
            </Display>
            <B.CouponButton
              _buttommedia='0px'
              onClick={openModal}
            >
              쿠폰 등록하기
            </B.CouponButton>
          </L.Contents>
          {
            modal &&
            <CouponAlert
              onButtonClick={modal.onButtonClick}
              onOverlayClick={modal.onOverlayClick}
            />
          }
          <B.FixedActionButton
            _displaymedia='none'
          >완료</B.FixedActionButton>
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