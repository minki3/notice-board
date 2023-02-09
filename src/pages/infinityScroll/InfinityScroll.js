import React, { useState, useEffect, useRef, useMemo } from "react";
import Skeleton from "./Skeleton";
import styled from "styled-components";
import axios from "axios";

const InfinityScroll = () => {
  const [itemList, setItemList] = useState([]);
  const observerTarget = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const getFetch = async () => {
    try {
      await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((data) => {
          console.log(data.data);
          if (data.data.length === 0) return;
          setItemList((prev) => [...prev, ...data.data]);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(itemList);
  console.log(isLoading);
  const onIntersection = (entries, io) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        io.unobserve(entry.target);
        getFetch();
        setIsLoading(true);
      }
    });
  };

  useEffect(() => {
    let observer;
    if (observerTarget.current) {
      observer = new IntersectionObserver(onIntersection);
      observer.observe(observerTarget.current);
    }
    return () => {
      observer && observer.disconnect();
    };
  });

  return (
    <div>
      <div>infinityScroll</div>
      {itemList.map((item, idx) => {
        return <div key={idx}>{item.id}</div>;
      })}
      {isLoading && <Skeleton />}
      <div ref={observerTarget}></div>
    </div>
  );
};

export default InfinityScroll;
