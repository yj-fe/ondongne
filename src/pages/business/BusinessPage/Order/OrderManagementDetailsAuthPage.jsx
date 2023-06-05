import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as L from "components/commonUi/Layout";
import * as T from "components/commonUi/Text";
import * as B from "components/commonUi/Button";
import * as C from "components/commonUi/CommonStyles";
import * as I from "components/commonUi/Input";
import { Down, Delete, Camera, ArrowTop } from "components/commonUi/Icon";
import { InfoBoxDiv, TitleInfo } from "components/Buisness/BusinessManagement/BusinessManagementTabStyle";
import { ToggleS } from "components/Login/Password/ToggleDetail/ToggleDetailStyle";
import SimpleConfirm from "components/commonUi/SimpleConfirm";
import { imageValidation } from "utils/utils";
import { deliveryCertificateSave } from "service/deliveryCertificate";
import Layout from "components/layout/Layout/Layout";

function OrderManagementDetailsAuthPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState();
  const [alert, setAlert] = useState(null);
  const [fileError, setFileError] = useState("");

  const [data, setData] = useState({
    orderId: location.state.id,
    storeId: location.state.storeId,
    type: "예시문구",
    text: "",
    files: [],
  });

  const onSubmit = async () => {
    if (data.type === "예시문구") {
      return openAlert("인증 내용을 선택해주세요.");
    }

    const response = await deliveryCertificateSave(data);

    if (response && response.data.data) {
      return setAlert({
        contents: "배달/픽업이 완료처리 되었습니다.",
        confirmText: "확인",
        onConfirmClick: () => navigate(-1, { replace: true }),
        active: () => navigate(-1, { replace: true }),
      });
    } else {
      openAlert("배달/픽업 인증 등록 실패하였습니다.");
    }
  };

  const openAlert = (msg) => {
    setAlert({
      contents: msg,
      confirmText: "확인",
      onConfirmClick: () => setAlert(null),
      active: () => setAlert(null),
    });
  };

  // 선택한 분류로 바꾸기
  const dataChecked = (type) => {
    setData({ ...data, type: type });
  };

  return (
    <div>
      <Layout
        title="배달/픽업 인증"
        cart={false}
        bell={false}
        floating={false}
        onBackClick={() => navigate(-1)}>
        <L.Container _padding="0px 0px 60px">
          <L.Contents _height="calc(100vh - 68px)" _padding="0px">
            <L.FlexCols _gap={40} _padding="8px 20px">
              <L.FlexCols _gap={16}>
                <T.Text _weight={600} _size={16} _color="gray900">
                  사진 등록
                </T.Text>
                <L.FlexRows _gap={16}>
                  <B.LayerTextButton _width="100px" _height="100px">
                    <B.LabelCols htmlFor="files">
                      <Camera />
                      <T.Text _weight={400} _size={15} _color="gray900" _align="center" _content="center">
                        파일 첨부
                      </T.Text>
                    </B.LabelCols>
                  </B.LayerTextButton>
                  {data.files.length > 0 &&
                    data.files.map((file, idx) => (
                      <FileList
                        key={idx}
                        file={file}
                        deleteFile={() => {
                          setFileError("");
                          setData({
                            ...data,
                            files: data.files.filter((item) => item !== file),
                          });
                        }}
                      />
                    ))}
                  <input
                    type="file"
                    id="files"
                    style={{ display: "none" }}
                    onChange={(e) => {
                      if (!e.target.files[0]) return;
                      const valid = imageValidation(e.target.files[0]);
                      if (valid) return;

                      if (data.files.length === 5) {
                        return setFileError("최대 5개까지 추가 가능합니다.");
                      }
                      setData({
                        ...data,
                        files: [...data.files, e.target.files[0]],
                      });
                    }}
                  />
                </L.FlexRows>
                {fileError && (
                  <T.Text as="p" _size={13} _weight={400} style={{ color: "#D32F2F" }}>
                    {fileError}
                  </T.Text>
                )}
              </L.FlexCols>

              <L.FlexCols _gap={16}>
                <T.Text _weight={600} _size={16} _color="gray900">
                  배달/픽업 인증 내용
                </T.Text>
                <InfoBoxDiv onClick={() => setShow((s) => !s)}>
                  <TitleInfo>{data.type}</TitleInfo>
                  {show ? <ArrowTop /> : <Down />}
                </InfoBoxDiv>
                {show && (
                  <Toggle type={data.type} handler={dataChecked} closeSelector={() => setShow(false)} />
                )}
                <I.Textarea
                  placeholder="텍스트를 입력해 주세요."
                  value={data.text}
                  onChange={(e) =>
                    setData({
                      ...data,
                      text: e.target.value,
                    })
                  }
                />
              </L.FlexCols>
            </L.FlexCols>

            <B.FixedActionButton type="button" onClick={onSubmit}>
              배달/픽업 완료
            </B.FixedActionButton>
          </L.Contents>
        </L.Container>
      </Layout>
      {alert && (
        <SimpleConfirm
          contents={alert.contents}
          confirmText={alert.confirmText}
          onConfirmClick={alert.onConfirmClick}
          active={alert.active}
        />
      )}
    </div>
  );
}

function Toggle({ type, handler, closeSelector }) {
  const [data, setData] = useState([
    {
      id: 0,
      name: "예시문구",
      checked: false,
    },
    {
      id: 1,
      name: "고객님, 오늘도 맛있는 저희 상품 구매해주셔서 감사합니다.",
      checked: false,
    },
    {
      id: 2,
      name: "배달 완료 인증해드립니다. 확인 부탁드려요~",
      checked: false,
    },
    {
      id: 3,
      name: "주문해주셔서 감사합니다~",
      checked: false,
    },
  ]);

  const clickHandler = (name) => {
    setData(
      data.map((item) =>
        item.name === name ? { ...item, checked: !item.checked } : { ...item, checked: false }
      )
    );
    handler(name);
    closeSelector();
  };
  useEffect(() => {
    setData(data.map((item) => (item.name === type ? { ...item, checked: !item.checked } : item)));
  }, []);
  return (
    <div>
      <ToggleS>
        <L.FlexCols _gap="0px">
          {data.map((item) => (
            <L.FlexRows
              key={item.id}
              _padding="12px 16px"
              _height="48px"
              _items="center"
              onClick={() => clickHandler(item.name)}>
              <T.Text
                _weight={item.checked ? 600 : 400}
                _size={15}
                _color={item.checked ? "green700" : "gray900"}>
                {item.name}
              </T.Text>
            </L.FlexRows>
          ))}
        </L.FlexCols>
      </ToggleS>
    </div>
  );
}

const FileList = ({ file, deleteFile }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (!file) return;

    let reader = new FileReader();
    reader.onload = function () {
      setImage({ result: reader.result });
    };
    reader.readAsDataURL(file);
  }, [file]);

  return (
    <C.ImageBox style={{ width: "100px", height: "100px" }}>
      <C.DeleteBtn onClick={deleteFile}>
        <Delete />
      </C.DeleteBtn>
      <img src={image?.result} width={"100%"} height={"100%"} />
    </C.ImageBox>
  );
};

export default OrderManagementDetailsAuthPage;
