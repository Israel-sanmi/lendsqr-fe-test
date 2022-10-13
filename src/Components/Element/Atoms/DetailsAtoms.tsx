import React from "react";
import "./detailsAtom.scss";
const DetailsAtoms = ({ title, info }: any) => {
  return (
    <div className="details-atom">
      <p className="title">{title}</p>
      <p className="info">{info}</p>
    </div>
  );
};

export default DetailsAtoms;
