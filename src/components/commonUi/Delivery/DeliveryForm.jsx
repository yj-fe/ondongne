import { useEffect, useState } from 'react';
import AddressModel from 'components/AddressModel';
import { ReactComponent as Right } from "assets/main/right.svg";
import styled from 'styled-components';
import DeliverySelectedItems from './DeliverySelectedItems';

const DeliveryForm = ({ data, setData }) => {

    const [open, isOpen] = useState(false);
    const [deliveries, setDeliverise] = useState(data.deliveries?.length > 0 ? data.deliveries : []);

    useEffect(() => {
        setData({ ...data, delivery: deliveries })
    }, [deliveries])

    return (
        <>
            <Container>
                <h1>활동지역</h1>
                <div
                    className="contents"
                    onClick={() => isOpen(true)}
                >
                    {
                        deliveries.length === 0 &&
                        <p>활동 지역 선택</p>
                    }
                    {
                        deliveries.length > 0 &&
                        <DeliverySelectedItems
                            data={deliveries}
                            setData={setDeliverise}
                        />
                    }
                    <div className='icon'><Right /></div >
                </div>
            </Container>
            {
                open &&
                <AddressModel
                    modelClose={() => isOpen(false)}
                    currentData={deliveries}
                    dataHandler={setDeliverise}
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

export default DeliveryForm;