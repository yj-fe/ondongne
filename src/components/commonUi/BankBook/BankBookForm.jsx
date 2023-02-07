import { useState } from 'react';
import BankSelect from './BankSelect';
import { ReactComponent as Down } from "assets/icons/arrow/Arrow-Down.svg";
import styled from 'styled-components';
import { useEffect } from 'react';

const BankBookForm = ({ data, setData }) => {

    const [bank, setBank] = useState("");
    const [open, isOpen] = useState(false);

    useEffect(() => {
        setData({ ...data, bank })
    }, [bank])

    return (
        <Container>
            <h1>통장 정보</h1>
            <div
                className="contents"
                onClick={() => isOpen(!open)}
            >
                <p>{data.bank ?? '은행 선택'}</p>
                <div
                    className='icon'
                ><Down /></div>
            </div>
            <div
                className="contents"
            >
                <Input
                    type='number'
                    name='accountNumber'
                    value={data.accountNumber}
                    placeholder='-를 제외한 계좌번호 입력'
                    onChange={e => setData({ ...data, accountNumber: e.target.value })}
                />
            </div>
            {
                open &&
                <BankSelect
                    close={() => isOpen(false)}
                    data={bank}
                    setData={setBank}
                />
            }
        </Container>
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

export default BankBookForm;
