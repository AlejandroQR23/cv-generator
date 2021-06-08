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
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
    }));

    console.log(this.state.personalInfo);
  };

  render() {
    const { personalInfo } = this.state;

    return (
      <div className='App'>
        <Header></Header>
        <div className='container pt-4'>
          <div className='row gx-4'>
            <FormContainer
              personalInfo={personalInfo}
              handlePersonalChange={this.handlePersonalChange}
            />
            <PreviewContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
