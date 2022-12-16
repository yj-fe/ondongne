상세페이지만들기

상품 클릭하면 상세페이지로 이동

import {useNavigate} from 'react-router-dom'
const navigate = useNavigate()
onClick={()=>{navigate(`/products/${id}`, { state: {product}})}}


Detail.jsx

const{ 
  state: {
    product: {id, title, img, price, ....},
  },
} = useLocation();
return
  <section>
  </section>