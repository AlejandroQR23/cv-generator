import React from "react";

import Footer from "./components/footer/footer.component";
import FormContainer from "./components/cv-form/form-container/form-container.component";
import Header from "./components/header/header.component";
import PreviewContainer from "./components/cv-preview/preview-container/preview-container.component";

const App = () => (
  // * Personal Info
  // handlePersonalChange = (e) => {
  //   const { value, name } = e.target;

  //   this.setState((prevState) => ({
  //     // Experience and Education fields stay the same
  //     ...prevState,
  //     personalInfo: {
  //       // other personal fields stay the same
  //       ...prevState.personalInfo,
  //       // changed field changes in the state
  //       [name]: value,
  //     },
  //   }));
  // };

  // * Experience and Education inputs
  // handleChange = (e, i, field) => {
  //   const { name, value } = e.target;

  //   this.setState((prevState) => {
  //     const newArr = prevState[field].map((item, index) => {
  //       if (index === i) return { ...item, [name]: value };
  //       else return item;
  //     });
  //     return { ...prevState, [field]: [...newArr] };
  //   });
  // };

  // handleDelete = (i, field) => {
  //   this.setState((prevState) => {
  //     const newArr = prevState[field].filter((item, index) => index !== i);
  //     return { ...prevState, [field]: [...newArr] };
  //   });
  // };

  // * Education
  // handleAddEducation = () => {
  //   this.setState((prevState) => ({
  //     ...prevState,
  //     education: [
  //       ...prevState.education,
  //       {
  //         schoolName: "",
  //         schoolCity: "",
  //         degree: "",
  //         startDate: "",
  //         endDate: "",
  //       },
  //     ],
  //   }));
  // };

  // * Experience
  // handleAddExperience = () => {
  //   this.setState((prevState) => ({
  //     ...prevState,
  //     experience: [
  //       ...prevState.experience,
  //       {
  //         position: "",
  //         company: "",
  //         startDate: "",
  //         gradDate: "",
  //       },
  //     ],
  //   }));
  // };

  <div className="App">
    <Header />
    <div className="py-4">
      <div className="row justify-content-evenly">
        <FormContainer />
        <PreviewContainer />
      </div>
    </div>

    <Footer />
  </div>
);

export default App;
