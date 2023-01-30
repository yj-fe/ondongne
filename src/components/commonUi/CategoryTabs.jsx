import * as T from 'components/commonUi/Text';
import styled from 'styled-components';

const Contents = styled.div`
    width: 100%;
    overflow-x: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`

const ScrollView = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    min-width: 728px;
    height: 48px;
    padding-left: 24px;
    gap: 0 20px;
    /* overflow: scroll; */
`;

const CategoryTabs = ({ currentData, onChange }) => {

    const categories = [
        "전체", "야채,과일", "정육", "수산,해산",
        "쌀,잡곡", "식품", "생활용품",
        "디저트", "식음료", "반려동물", "기타"
    ];

    return (
        <Contents>
            <ScrollView>
                {
                    categories.map(category => (
                        <T.Text
                            _size={16}
                            _weight={600}
                            _align='center'
                            _color={currentData === category ? 'green700' : 'gray400'}
                            // _line={currentData === category ? '2.8' : '1.5'}
                            _line={'2.8'}
                            onClick={() => onChange(category)}
                            style={{ cursor: 'pointer', borderBottom: currentData === category ? '2px solid #0B806F' : 'none' }}
                        >{category.replace(',', '/')}</T.Text>
                    ))
                }
            </ScrollView>
        </Contents>
    )
}

export default CategoryTabs;