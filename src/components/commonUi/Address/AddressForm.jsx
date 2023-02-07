import { ReactComponent as Right } from "assets/main/right.svg";
import styled from "styled-components";
import { useState } from 'react';
import DaumPost from "components/DaumPost";
import { useEffect } from 'react';

const AddressForm = ({ data, setData }) => {

    const [open, isOpen] = useState(false);
    const [address, setAddress] = useState('');

    useEffect(() => {
        setData({ ...data, address })
    }, [address]);

    return (
        <>
            <Container>
                <h1>주소</h1>
                <div
                    className="contents"
                    onClick={() => isOpen(true)}
                >
                    <p>{data.address ? data.address : '우편번호 검색'}</p>
                    <div className="icon"><Right /></div>
                </div>
                <div className="contents">
                    <Input
                        name='addressDetails'
                        value={data.addressDetails}
                        onChange={e => setData({ ...data, addressDetails: e.target.value })}
                        placeholder="상세주소 입력"
                    />
                </div>
            </Container>
            {
                open &&
                <DaumPost
                    closeModel={() => isOpen(false)}
                    setAddress={setAddress}
                />
            }
        </>
    )
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	gap: 16px;
	width: 100%;
	height: auto;
    position: relative;

    & h1 {
        font-weight: 600;
        font-size: 15px;
        color: #212121;
        width: 100%;
    }

    & p {
        font-weight: ${(props) => props.weight || 400};
        font-size: 16px;
        color: ${(props) => props.color || "gray900"};
    }

    > .contents {
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding: 14px 12px;
        gap: 12px;
        width: 100%;
        height: auto;
        background: #ffffff;
        border-bottom: 1px solid #eeeeee;
    }
    > .icon {
        width: 24px;
	    height: 24px;
    }
`;

const Input = styled.input`
	font-weight: 400;
	font-size: 16px;
	width: ${(props) => props._width || "70%"};
	background-color: ${(props) => (props.color ? "#EEEEEE" : "none")};
	text-align: ${(props) => props.align || null};
	font-family: "Pretendard";
	font-style: normal;
	&::placeholder {
		color: ${(props) => props._place || "#bdbdbd"};
	}
	&:focus {
		color: #212121;
	}
	&::-ms-reveal {
		display: none;
	}
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}
`;

export default AddressForm;