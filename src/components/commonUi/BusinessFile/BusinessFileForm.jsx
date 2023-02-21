import { useState } from 'react';
import styled from "styled-components";
import { fileValidation } from 'utils/utils';
import { useEffect } from 'react';
import { Close } from "../Icon";

const BusinessFileForm = ({ data, setData }) => {
    const [files, setFiles] = useState([]);
    const [error, setError] = useState("");

    const fileUpload = (e) => {
        const uploadFile = e.target.files[0];
        const valid = fileValidation(uploadFile);

        if (files.length === 5) return setError('최대 5개까지 추가 가능합니다.');

        if (valid) return setError(valid);

        setError("");
        setFiles([...files, uploadFile]);
    }

    //파일 삭제
    const deleteFile = id => {
        setData({
            ...data,
            deleteFiles: [...data.deleteFiles, id],
            bizFiles: data.bizFiles.filter(b => b.bizFileId !== id)
        })
    }

    useEffect(() => {
        setData({ ...data, files })
    }, [files]);

    return (
        <Container>
            <div>
                <h1>사업자 등록증 첨부</h1>
                <ErrorText>사업자 관련 파일 첨부(파일은 pdf, jpg, png만 첨부 가능)</ErrorText>
            </div>
            <label
                htmlFor="files"
            >
                <p >사업자 등록증 첨부</p>
            </label>
            {error && <ErrorText _color='#D32F2F' >{error}</ErrorText>}
            <input type="file" id="files" onChange={fileUpload} />

            <FileForm>
                {
                    files.length > 0 &&
                    files.map((file, i) => (
                        <div key={i}>
                            <p>{file.name}</p>
                            <button
                                type='button'
                                onClick={() => setFiles(files.filter(item => item.name !== file.name))}
                            ><Close /></button>
                        </div>
                    ))
                }
                {
                    data.bizFiles?.length > 0 &&
                    data.bizFiles.map((file, i) => (
                        <div key={i}>
                            <p>{file.originalName}</p>
                            <button
                                type='button'
                                onClick={() => deleteFile(file.bizFileId)}
                            ><Close /></button>
                        </div>
                    ))
                }
            </FileForm>

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

    & span {
        font-size: 14px;
        color: ${(props) => props.color || "gray600"};
    }

    & label {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 14px 12px;
        width: 100%;
        height: 48px;
        background: #ffffff;
        border: 1px solid #eeeeee;
        border-radius: 4px;
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

    & input[type="file"] {
		display: none;
	}
`;

const FileForm = styled.div`
	width: 100%;

	& div {
		width: 100%;
		height: 44px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 12px 16px;
		background: #f5f5f5;

		& p {
			font-family: "Pretendard";
			font-style: normal;
			font-weight: 400;
			font-size: 14px;
			line-height: 20px;
			color: #757575;
		}

		& button {
			cursor: pointer;
			color: #757575;
		}
	}
`;

const ErrorText = styled.span`
    font-size: 14px !important;
    font-weight: 400 !important;
    color: ${props => props._color || '#757575'}  !important;
`;


export default BusinessFileForm;