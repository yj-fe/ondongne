import styled from "styled-components";
import { useState, useEffect } from "react";
import uuid from "react-uuid";

function StarRate({ rate, width = 15 }) {
    const AVG_RATE = Number(rate);
    const STAR_IDX_ARR = ['first', 'second', 'third', 'fourth', 'last'];
    const id = uuid();
    const [ratesResArr, setRatesResArr] = useState([0, 0, 0, 0, 0]);

    const calcStarRates = () => {
        let tempStarRatesArr = [0, 0, 0, 0, 0];
        let starVerScore = (AVG_RATE * (width * 5)) / 5;
        let idx = 0;
        while (starVerScore > width) {
            tempStarRatesArr[idx] = width;
            idx += 1;
            starVerScore -= width;
        }
        tempStarRatesArr[idx] = starVerScore;
        return tempStarRatesArr;
    };

    useEffect(() => {
        setRatesResArr(calcStarRates)
    }, [])

    return (
        <StarRateWrap>
            {STAR_IDX_ARR.map((item, idx) => {
                return <span className='star_icon' key={`${id + item}_${idx}`}>
                    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={width} viewBox='0 0 14 13' fill='#E0E0E0'>
                        <clipPath id={`${id + item}StarClip`}>
                            <rect width={`${ratesResArr[idx]}`} height='14' />
                        </clipPath>
                        <path
                            id={`${id + item}Star`}
                            d='M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z'
                            transform='translate(-2 -2)'
                        />
                        <use clipPath={`url(#${id + item}StarClip)`} href={`#${id + item}Star`} fill='#FEB244'
                        />
                    </svg>
                </span>
            })
            }
        </StarRateWrap>
    )
}

export default StarRate;

const StarRateWrap = styled.div`
    display: flex;
    align-items: center;
    .star_icon {
        display: inline-flex;
        margin-right: 2.5px;
    }
`