import React from "react";
import  {Insta}  from "./Insta";
import insta1 from "../../img/instagram/insta-1.jpg"
import insta2 from "../../img/instagram/insta-2.jpg"
import insta3 from "../../img/instagram/insta-3.jpg"
import insta4 from "../../img/instagram/insta-4.jpg"
import insta5 from "../../img/instagram/insta-5.jpg"
import insta6 from "../../img/instagram/insta-6.jpg"

const Instagram = () => {
  return (
    <div className="instagram">
      <div className="container-fluid">
        <div className="row">
          <Insta image = {insta1}></Insta>
          <Insta image = {insta2}></Insta>
          <Insta image = {insta3}></Insta>
          <Insta image = {insta4}></Insta>
          <Insta image = {insta5}></Insta>
          <Insta image = {insta6}></Insta>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
