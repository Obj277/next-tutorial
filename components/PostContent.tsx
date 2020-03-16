import React from 'react';
import {useRouter} from "next/router";

export default () => {
  const router = useRouter();

  return (
    <>
      <h1>{router.query.title}</h1>
      <p>{"router.query.content"}</p>
    </>
  );
};