import React from 'react';
import codeImg from '../../../images/codeImg.png';

export default function UserSampleCode() {
  return (
    <div className="userSampleCodeBox">
      <div className="userSampleCodeMainTxtBox">
        <p className="userSampleCodeMainTxt">Sample code</p>
      </div>
      <div className="userSampleCodeCard">
        <img src={codeImg} className="userSampleCodeImg" />
      </div>
    </div>
  );
}
