import React from "react";
import { useSelector } from "react-redux";
import { selectPersonalInfo } from "../../../redux/cv/cv.slice";

const PreviewHeader = () => {
  const { firstName, lastName, title } = useSelector(selectPersonalInfo);

  return (
    <header className="bg-dark text-light p-3">
      <h2>
        {firstName} {lastName}
      </h2>
      <h4>{title}</h4>
    </header>
  );
};

export default PreviewHeader;
