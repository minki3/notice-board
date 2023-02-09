import React, { useState } from "react";
import styled from "styled-components";
import First from "./First";
import Second from "./Second";
import Third from "./Third";

const MenuTab = () => {
  const [tab, setTab] = useState("first");
  console.log(tab);
  return (
    <Container>
      <Menu>
        {MENU_TAB.map((item, idx) => {
          return (
            <Content
              key={idx}
              onClick={() => {
                setTab(item);
              }}
              aria-current={tab === item ? "page" : null}
            >
              {item}
            </Content>
          );
        })}
      </Menu>
      <Tab>{OBJECT_MENU[tab]}</Tab>
    </Container>
  );
};

export default MenuTab;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 600px;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border: 1px solid gray;
  height: 100px;
  width: 500px;
`;
const Tab = styled.div`
  height: 300px;
  width: 500px;
  border: 1px solid gray;
`;
const Content = styled.div`
  width: 250px;
  height: 100px;
  border: 1px solid gray;

  :hover {
    background-color: black;
    color: white;
  }

  &[aria-current] {
    background-color: black;
    color: white;
  }
`;

const MENU_TAB = ["first", "second", "third"];

const OBJECT_MENU = { first: <First />, second: <Second />, third: <Third /> };
