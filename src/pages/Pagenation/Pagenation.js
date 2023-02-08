import React, { useState, useEffect } from "react";
import PagenationButton from "./PagenationButton";
import styled from "styled-components";
import axios from "axios";

const Pagenation = () => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10); //페이지 당 보여질 갯수
  const [page, setPage] = useState(1); //현재 페이지
  const offset = (page - 1) * limit;

  const pageData = async () => {
    try {
      await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => setData(res.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    pageData();
  }, []);

  console.log(data.length);
  return (
    <Container>
      <Top>pagenation</Top>
      <Main>
        {data.slice(offset, offset + limit).map((item) => {
          const { id, title, body } = item;
          return (
            <ItemFlex key={id}>
              <div>
                {id} : {title}
              </div>
              <div>body : {body}</div>
            </ItemFlex>
          );
        })}
      </Main>
      <ButtonArea>
        <PagenationButton
          total={data.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </ButtonArea>
    </Container>
  );
};

const Container = styled.div``;

const Top = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 1px solid gray;
  padding: 20px;
  text-align: center;
  background-color: white;
`;
const Main = styled.div`
  padding: 5px;
  padding-bottom: 20px;
  margin-top: 59px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
`;
const ItemFlex = styled.div`
  padding-bottom: 20px;
`;
const ButtonArea = styled.div`
  height: 70px;
`;
export default Pagenation;
