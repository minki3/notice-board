import React from "react";

export default function EventExercise() {
  const handleParentClick = (event) => {
    console.log("부모 이벤트");
    // event.stopPropagation();
  };

  const handleChild1Click = (event) => {
    console.log("자식1 이벤트");
    // 이벤트 전파 중단
    // event.stopPropagation();
  };

  const handleChild2Click = (event) => {
    console.log("자식2 이벤트");
    // event.stopPropagation();
  };

  const handleLinkClick = (event) => {
    // 기본 동작인 페이지 전환을 막음
    event.preventDefault();

    // 추가적인 로직을 수행할 수 있음
    alert("링크 클릭, 페이지 전환을 막음");
  };

  return (
    <div>
      <div onClick={handleParentClick}>
        부모
        <div onClick={handleChild1Click}>
          자식1
          <div onClick={handleChild2Click}>자식2</div>
        </div>
        {/* <a href="www.naver.com" onClick={handleLinkClick}>
          이동
        </a> */}
      </div>
    </div>
  );
}
