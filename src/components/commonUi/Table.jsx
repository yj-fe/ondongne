import styled from "styled-components";

export const ReciptTable = styled.table`
    width: 100%;
    tr {
        padding: 2px 0;
        line-height: 1.5;
        font-weight: 400;

        th {
            text-align: left;
        }

        td {
            text-align: right;
        }
    }

    tfoot {
        position: relative;

        &::before {
            content: '';
            display: block;
            width: 100%;
            height: 33px;
        }

        &::after {
            content: '';
            position: absolute;
            top: 16px;
            left: 0;
            width: 100%;
            height: 1px;
            background: ${props => props.theme.color.gray200};
        }

        tr {
            border-top: 32px;
            padding-top: 16px;
            th,
            td {
                font-size: 18px;
                font-weight: 600;
            }
        }
    }
`;


export const MarketTable = styled.table`
    width: 100%;
    tr {
        font-size: 14px;
        padding: 2px 0;
        line-height: 1.5;
        font-weight: 400;
        height: 30px;
        color: #424242;
        
        th {
            white-space: nowrap;
            font-weight: 500;
            text-align: left;
            width: 120px;
        }

        td {
            text-align: left;
            /* width: calc(100% - 30px); */
            width: auto;
        }
    }

    tfoot {
        position: relative;

        &::before {
            content: '';
            display: block;
            width: 100%;
            height: 33px;
        }

        &::after {
            content: '';
            position: absolute;
            top: 16px;
            left: 0;
            width: 100%;
            height: 1px;
            background: ${props => props.theme.color.gray200};
        }

        tr {
            border-top: 32px;
            padding-top: 16px;
            th{
                font-size: 13px;
                font-weight: 500;
                color: #424242;
            };
            td {
                font-size: 15px;
                font-weight: 400;
                color: #424242;
            }
        }
    }
`;