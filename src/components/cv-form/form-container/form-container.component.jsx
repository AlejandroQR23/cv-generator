import React from "react";
import "./form-container.styles.scss";

import Education from "../education/education.component";
import Experience from "../experience/experience.component";
import PersonalInfo from "../personal-info/personal-info.component";

const FormContainer = () => (
  <div className="col-12 col-xl-5 cv-form mx-2 bg-secondary text-light">
    <PersonalInfo />
    <Education />
    <Experience />
  </div>
);

export default FormContainer;
