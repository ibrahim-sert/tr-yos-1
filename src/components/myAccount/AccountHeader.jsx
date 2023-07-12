import React from "react";
import headerphoto from "../../helper/myaccountheaderphoto.jpg";
const AccountHeader = () => {
  return (
    <div>
      <div>
        <p className="absolute font-bold text-4xl  top-[3rem] left-36 text-green-dark ">
          My Account
        </p>
        <div className=" w-full h-32 bg-green-light"></div>
        {/* <img src={headerphoto} className="w-full h-40 object-cover" alt="" /> */}
      </div>
    </div>
  );
};

export default AccountHeader;
