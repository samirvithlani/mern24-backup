import React from "react";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const id = useParams().id;
  return <div>ProductDetail --- {id}</div>;
};
