import React from "react";
import * as M from 'components/Main/More/ModalPageStyle'
import * as T from 'components/commonUi/Text';
import * as L from 'components/commonUi/Layout';
import { sortFormatter } from "utils/utils";
import { Check } from "./Icon";

const SortFilter = ({ sorts, close, selectedData, setSelectedData }) => {
    const clickHandler = (sort) => {
        setSelectedData(sort);
        close();
    }
    return (
        <M.ModalOutside>
            <M.ModalBody>
                <M.ModalDiv1>정렬</M.ModalDiv1>
                <L.Contents _padding='16px 20px' >
                    <L.FlexCols _gap={32}>

                        {
                            sorts.map((sort, index) => (
                                <L.FlexRows key={index} _content='space-between' _items='center'>
                                    <T.Text
                                        _weight={sort === selectedData ? 600 : 400}
                                        _size={15}
                                        _color={sort === selectedData ? "green800" : "gray700"}
                                        onClick={() => clickHandler(sort)}
                                    >{sortFormatter(sort)}</T.Text>
                                    {
                                        sort === selectedData && <Check />
                                    }
                                </L.FlexRows>
                            ))
                        }
                    </L.FlexCols>
                </L.Contents>
                <M.ModalButton
                    type="button"
                    onClick={close}
                >
                    닫기
                </M.ModalButton>
            </M.ModalBody>
        </M.ModalOutside>
    )
}

export default SortFilter;