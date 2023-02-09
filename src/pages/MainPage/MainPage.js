import React, { useState } from "react";
import styled from "styled-components";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser from "react-html-parser";

const MainPages = () => {
  const [contents, setContents] = useState({ title: "", detail: "" });
  const [noticeBoard, setNoticeBoard] = useState([]);

  const { title, detail } = contents;

  const handleTitle = (e) => {
    const { name, value } = e.target;
    setContents((prev) => ({ ...prev, [name]: value }));
  };

  const handleButton = () => {
    setNoticeBoard(noticeBoard.concat(contents));
  };

  const deleteContant = () => {
    setContents({ title: "", detail: "" });
  };

  const deleteButton = (i) => {
    setNoticeBoard(noticeBoard.filter((_, index) => index !== i));
  };

  return (
    <MainContainer>
      <NoticeBoard>noticeboard</NoticeBoard>
      <MainBox>
        {noticeBoard.map((item, idx) => {
          const { title, detail } = item;
          return (
            <div key={idx}>
              <Subject>{title}</Subject>
              <button
                onClick={() => {
                  deleteButton(idx);
                }}
              >
                x
              </button>
              <Content>{ReactHtmlParser(detail)}</Content>
            </div>
          );
        })}
      </MainBox>
      <Title
        placeholder="제목"
        onChange={handleTitle}
        value={title}
        name="title"
      ></Title>
      <CKEditor
        editor={ClassicEditor}
        data={detail}
        name="detail"
        config={{
          // toolbar: ["heading", "|", "bold", "italic", "link", "bulletedList"], //커스터마이징
          placeholder: "내용을 입력하세요.",
        }}
        // onReady={(editor) => {
        //   // You can store the "editor" and use when it is needed.
        //   console.log("Editor is ready to use!", editor);
        // }}
        onChange={(event, editor) => {
          const content = editor.getData();
          setContents((prev) => ({ ...prev, detail: content }));
        }}

        // onBlur={(event, editor) => {
        //   console.log("Blur.", editor);
        // }}
        // onFocus={(event, editor) => {
        //   console.log("Focus.", editor);
        // }}
      />
      <Button
        onClick={() => {
          if (title === "") {
            alert("제목을 입력하세요");
          } else {
            deleteContant();
            handleButton();
          }
        }}
      >
        올리기
      </Button>
    </MainContainer>
  );
};

export default MainPages;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const NoticeBoard = styled.div`
  padding: 20px;
`;

const MainBox = styled.div`
  width: 100%;
  padding-bottom: 20px;
  margin-bottom: 50px;
`;

const Title = styled.input`
  width: 400px;
  padding: 5px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  background: black;
  color: white;
  border-radius: 10px;
  margin-top: 10px;
  cursor: pointer;
  :hover {
    background: white;
    color: black;
  }
`;

const Subject = styled.div`
  font-weight: bold;
  text-align: center;
  padding: 10px;
  margin-top: 10px;
  border-top: 1px solid gray;
`;

const Content = styled.div`
  text-align: center;
  border-bottom: 1px solid gray;
  padding: 10px;
`;
