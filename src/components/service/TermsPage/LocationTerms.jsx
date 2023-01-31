import React, { useEffect, useState } from 'react'
import Layout from 'components/layout/Layout/Layout'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { locationPolicy } from 'service/policy';
import { Scroll } from 'components/Login/Password/ToggleDetail/ToggleDetailStyle';


function LocationTerms() {

  const requestData = {
    policyType: "LOCATION"
  }
  const [policy, setPolicy] = useState();

  const getPolicy = async () => {
    const response = await locationPolicy(requestData);
    const { data } = response.data;
    setPolicy(data);
  }

  useEffect(() => {
    getPolicy()
  }, [])


  return (
    <Layout
      title="위치기반 서비스 이용약관"
      cart={false}
      bell={false}
    >
      <L.Container _cursor='default'>
        <L.Contents _height='calc(100vh - 68px)'>
          <Scroll _height='calc(100vh - 110px)'>
            <T.Text _size={14} _color='gray800'>{policy}</T.Text>
          </Scroll>
        </L.Contents>
      </L.Container>
    </Layout>
  )
}

export default LocationTerms