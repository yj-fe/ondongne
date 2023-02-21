import React, { useEffect, useState } from 'react'
import Layout from 'components/layout/Layout/Layout'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { Scroll } from 'components/Login/Password/ToggleDetail/ToggleDetailStyle';
import { locationPolicy } from 'service/policy';


function TermsModal({ closeModel, type }) {

    const [policy, setPolicy] = useState();

    const getPolicy = async () => {
        const response = await locationPolicy({ policyType: type });
        const { data } = response.data;
        setPolicy(data);
    }

    function getTitle() {
        if (type === "USE") {
            return "서비스 이용약관"
        }
        if (type === "PRIVACY") {
            return "개인정보 처리방침"
        }
        if (type === "MARKETING") {
            return "마케팅 활용 동의약관"
        }
    }

    useEffect(() => {
        getPolicy()
    }, [])

    return (
        <Layout
            title={getTitle()}
            cart={false}
            bell={false}
            onBackClick={closeModel}
        >
            <L.Container>
                <L.Contents _height='calc(100vh - 68px)'>
                    <Scroll _height='calc(100vh - 110px)'>
                        <T.Text _size={14} _color='gray800'>{policy}</T.Text>
                    </Scroll>
                </L.Contents>
            </L.Container>
        </Layout>
    )
}

export default TermsModal