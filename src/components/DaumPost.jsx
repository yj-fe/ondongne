import { useEffect, useState } from 'react';
import DaumPostCode from 'react-daum-postcode';
import Overlay from './layout/Overlay/Overlay';
import styled from 'styled-components';
import Header from './layout/Header/Header';
import Alert from './commonUi/Alert';

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 60px);
    max-width: 728px;
    position: absolute;
    top: 60px;
`;

const DaumPost = ({ closeModel, setAddress }) => {
    const [alert, setAlert] = useState(null);
    const portal = document.getElementById('portal');

    const handleComplete = (data) => {
        let address = data.address;
        let extraAddress = '';
        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            address += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }

        if (!address.includes("김포")) {
            return setAlert({
                contents: `현재는 '경기도 김포시' 지역으로 운영 중 입니다.\n김포 지역으로 위치 설정이 가능합니다.`,
                buttonText: "확인",
                onButtonClick: () => setAlert(false),
                onOverlayClick: () => setAlert(false),
            })
        }

        setAddress(address);
        closeModel();
    }

    useEffect(() => {
        portal.firstChild.style.backgroundColor = "#F5F5F5";
    }, [])

    return (
        <Overlay
            style={{ alignItems: "flex-end" }}
            onOverlayClick={closeModel}
        >
            <Header
                title={"주소검색"}
                onBackClick={closeModel}
            />
            <Container>
                <DaumPostCode
                    className="post-code"
                    onComplete={handleComplete}
                    autoClose={false}
                    style={{ width: "100%", height: "100%" }}
                />
                {
                    alert &&
                    <Alert
                        contents={alert.contents}
                        buttonText={alert.buttonText}
                        onButtonClick={alert.onButtonClick}
                        onOverlayClick={alert.onOverlayClick}
                    />
                }
            </Container>
        </Overlay>
    );
}
export default DaumPost;