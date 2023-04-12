import * as S from "./TextEditor.style";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageCompress from "quill-image-compress";
import ImageResize from "quill-image-resize-module-react";
import { useMemo, useRef } from "react";
import { editorFileUpload } from "service/common";
import { base64toFile } from "utils/utils";
Quill.register("modules/imageResize", ImageResize);
Quill.register("modules/imageCompress", ImageCompress);

const formats = [
    //'font',
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    // "link",
    "image",
    "align",
    "color",
    "background",
];

function TextEditor({ initData, onChange, ...props }) {
    const QuillRef = useRef();

    const modules = useMemo(() => {
        return {
            toolbar: [
                //[{ 'font': [] }],
                [{ header: [1, 2, false] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
                [{ list: "ordered" }, { list: "bullet" }],
                ["link", "image"],
            ],
            imageCompress: {
                quality: 1, // default
                maxWidth: 726,
                imageType: "image/jpeg", // default
                debug: false, // default
                suppressErrorLogging: false, // default
                insertIntoEditor: async (imageBase64URL, imageBlob) => {
                    await editorFileUpload(
                        base64toFile(imageBase64URL, "editorFile.png")
                    )
                        .then((res) => {
                            const editor = QuillRef.current.getEditor();
                            const range = editor.getSelection();
                            editor.insertEmbed(
                                range.index,
                                "image",
                                res.data.data
                            );
                        })
                        .catch((error) => {
                            console.error(error);
                        });
                },
            },
            imageResize: {
                parchment: Quill.import("parchment"),
                modules: ["Resize", "DisplaySize", "Toolbar"],
            },
        };
    }, []);

    return (
        <S.TextEditor _height={props.height}>
            <ReactQuill
                ref={(element) => {
                    if (element !== null) {
                        QuillRef.current = element;
                    }
                }}
                value={initData}
                onChange={onChange}
                modules={modules}
                formats={formats}
                theme="snow"
                placeholder="내용을 입력해주세요."
            />
        </S.TextEditor>
    );
}

export default TextEditor;
