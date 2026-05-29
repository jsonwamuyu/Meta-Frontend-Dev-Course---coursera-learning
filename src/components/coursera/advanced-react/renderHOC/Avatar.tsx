import React from "react";

const Card = ({ children }) => {
  return <div className="">{children}</div>;
};

const Avatar = ({ size = 100, name, role }) => {
  return (
    <div className=" rounded-sm shadow-sm p-4 flex flex-row gap-8">
      <img
        src="../src/assets/profile.png"
        alt={name}
        width={size}
        height={100}
        className="rounded-full"
      />
      <div className="flex flex-col">
        <h5>{name}</h5>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default Avatar;
