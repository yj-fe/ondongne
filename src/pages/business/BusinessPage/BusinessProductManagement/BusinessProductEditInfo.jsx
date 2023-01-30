import React, { useMemo, useState } from 'react'
import Layout from 'components/layout/Layout/Layout'
import * as L from 'components/commonUi/Layout';
import * as B from 'components/commonUi/Button';
import Confirm from 'components/commonUi/Confirm';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { editorFileUpload } from 'service/common';
import 'utils/Editor.css';

const BusinessProductEditInfo = ({ isOpen, close, data, dataHanler }) => {
  const [value, setValue] = useState('');
  const [confirm, setConfirm] = useState(null);

  // 파일업로드 이벤트
  const customUploadAdapter = (loader) => {
    return {
      upload() {
        return new Promise((resolve, reject) => {
          loader.file.then(async (file) => {
            await editorFileUpload(file)
              .then((res) => {
                resolve({
                  default: res.data.data
                });
              })
              .catch((err) => reject(err));
          })
        })
      }
    }
  }

  return (
    <L.Overlay
      style={{ display: isOpen ? 'block' : 'none' }}
    >
      <Layout
        title="돌아가기"
        cart={false}
        bell={false}
        floating={false}
        onBackClick={() => {
          setConfirm({
            contents: `지금 페이지를 나가시면\n작성중인 데이터가 저장되지 않을 수 있습니다.`,
            confirmText: "나가기",
            cancelText: "취소",
            onConfirmClick: () => {
              setConfirm(null);
              close();
            },
            onCancelClick: () => {
              setConfirm(null);
            }
          });
        }}
      >
        <L.Container _padding="0px" >
          <L.Contents _padding="0px" _height='100vh'>
            <CKEditor
              editor={ClassicEditor}
              config={{
                extraPlugins: [(function (editor) {
                  editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
                    return customUploadAdapter(loader);
                  }
                })],
              }}
              data={data.description}
              onChange={(event, editor) => {
                const data = editor.getData();
                setValue(data);
              }}
            />
          </L.Contents>
        </L.Container>
            <B.FixedActionButton
              onClick={() => {
                dataHanler({
                  ...data,
                  description: value
                })
                close();
              }}
            >저장
            </B.FixedActionButton>
      </Layout>
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
    </L.Overlay>
  )
}

export default BusinessProductEditInfo;