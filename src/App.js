import { Component } from 'react';

import './App.css';

import { FormContainer } from './components/cv-form/form-container/form-container.component';
import { PreviewContainer } from './components/cv-preview/preview-container/preview-container.component';
import { Header } from './components/header/header.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      personalInfo: {
        firstName: '',
        lastName: '',
        title: '',
        address: '',
        phoneNumber: '',
        email: '',
        description: '',
      },

      // An array with the work experience
      experience: [
        // each array item will represent a job
        {
          position: '',
          company: '',
          city: '',
          startDate: '',
          endDate: '',
        },
      ],

      // An array with the education
      education: [
        // each array item will represent a school
        {
          schoolName: '',
          schoolCity: '',
          degree: '',
          startDate: '',
          gradDate: '',
        },
      ],
    };
  }

  handlePersonalChange = (e) => {
    const { value, name } = e.target;

    this.setState((prevState) => ({
      // Experience and Education fields stay the same
      ...prevState,
      personalInfo: {
        // other personal fields stay the same
        ...prevState.personalInfo,
        // changed field changes in the state
        [name]: value,
      },
    }));
  };

  // * Education
  handleChangeEducation = (e, i) => {
    const { name, value } = e.target;

    this.setState((prevState) => {
      const newEdu = prevState.education.map((edItem, index) => {
        if (index === i) return { ...edItem, [name]: value };
        else return edItem;
      });
      return { ...prevState, education: [...newEdu] };
    });
  };

  handleDeleteEducation = (i) => {
    this.setState((prevState) => {
      const newEdu = prevState.education.filter(
        (eduItem, index) => index !== i
      );
      return { ...prevState, education: [...newEdu] };
    });
  };

  handleAddEducation = () => {
    this.setState((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education,
        {
          schoolName: '',
          schoolCity: '',
          degree: '',
          startDate: '',
          gradDate: '',
        },
      ],
    }));
  };

  render() {
    const { personalInfo, education, experience } = this.state;

    return (
      <div className='App bg-light'>
        <Header></Header>
        <div className='container pt-4'>
          <div className='row gx-4'>
            <FormContainer
              personalInfo={personalInfo}
              education={education}
              experience={experience}
              handlePersonalChange={this.handlePersonalChange}
              handleAddEducation={this.handleAddEducation}
              handleDeleteEducation={this.handleDeleteEducation}
              handleChangeEducation={this.handleChangeEducation}
            />
            <PreviewContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
