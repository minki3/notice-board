import React from "react";
import styled from "styled-components";

const PagenationButton = ({ total, page, limit, setPage }) => {
  const numPage = Math.ceil(total / limit);
  console.log("numpage : ", numPage);
  console.log("page : ", page);

  return (
    <div>
      <Button
        onClick={() => {
          setPage(page - 1);
        }}
        disabled={page === 1}
      >
        &lt;
      </Button>
      {Array(numPage)
        .fill()
        .map((_, idx) => {
          return (
            <Button
              key={idx}
              onClick={() => {
                setPage(idx + 1);
              }}
              aria-current={page === idx + 1 ? "page" : null}
            >
              {idx + 1}
            </Button>
          );
        })}
      <Button
        onClick={() => {
          setPage(page + 1);
        }}
        disabled={page === numPage}
      >
        &gt;
      </Button>
    </div>
  );
};

const Button = styled.button`
  cursor: pointer;
  :hover {
    background-color: black;
    color: white;
  }

  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
    color: black;
  }
  &[aria-current] {
    background-color: black;
    color: white;
  }
`;

export default PagenationButton;
