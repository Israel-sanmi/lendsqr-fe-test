import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./singleUser.scss";

const Singleuser = ({ userDetails, users, contain }: any) => {
  const { details }: any = useParams();

  type fetchProps = {
    email: string;
    gender: string;
    username: string;
    createdAt: number;
    orgName: string;
    phoneNumber: number;
  };

  return (
    <div>
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magni
        amet nam fugit nisi sit incidunt adipisci? Odio, consequatur rerum,
        quibusdam totam nam soluta eveniet itaque accusantium aliquid neque
        voluptatum.
        {contain.map((x: any) => {
          if (details == x.id) {
            return <p>{x.userName}</p>;
          }
        })}
      </>
    </div>
  );
};

export default Singleuser;
