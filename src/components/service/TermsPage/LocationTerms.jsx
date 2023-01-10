import React, { useEffect, useState } from 'react'
import Layout from 'components/layout/Layout/Layout'
import * as L from 'components/commonUi/Layout';
import * as T from 'components/commonUi/Text';
import { locationPolicy } from 'service/policy';


function LocationTerms() {

  const requestData = {
    policyType: "LOCATION"
  }
  const [policy, setPolicy] = useState();

  const getPolicy = async () => {
    const response = await locationPolicy(requestData);
    const { data } = response.data;
    setPolicy(data);
    console.log(policy);
  }

  useEffect(() => {
    getPolicy()
  }, [])


  return (
    <div>
      <Layout
        title="위치기반 서비스 이용약관"
        cart={false}
        bell={false}
      >
        <L.Container>
          <L.Contents>
              <T.Text _size={14} _color='gray800'>{policy}</T.Text>
          </L.Contents>
        </L.Container>
      </Layout>
    </div>
  )
}

export default LocationTerms