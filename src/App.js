import { Component } from 'react';

import ReactToPrint from 'react-to-print';

import { Footer } from './components/footer/footer.component';
import { FormContainer } from './components/cv-form/form-container/form-container.component';
import { Header } from './components/header/header.component';
import { PreviewContainer } from './components/cv-preview/preview-container/preview-container.component';

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

  // * Personal Info
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

  // * Experience and Education inputs
  handleChange = (e, i, field) => {
    const { name, value } = e.target;

    this.setState((prevState) => {
      const newArr = prevState[field].map((item, index) => {
        if (index === i) return { ...item, [name]: value };
        else return item;
      });
      return { ...prevState, [field]: [...newArr] };
    });
  };

  handleDelete = (i, field) => {
    this.setState((prevState) => {
      const newArr = prevState[field].filter((item, index) => index !== i);
      return { ...prevState, [field]: [...newArr] };
    });
  };

  // * Education
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
          endDate: '',
        },
      ],
    }));
  };

  // * Experience
  handleAddExperience = () => {
    this.setState((prevState) => ({
      ...prevState,
      experience: [
        ...prevState.experience,
        {
          position: '',
          company: '',
          startDate: '',
          gradDate: '',
        },
      ],
    }));
  };

  render() {
    const { personalInfo, education, experience } = this.state;

    return (
      <div className="App">
        <Header />
        <div className="py-4">
          <div className="row justify-content-evenly">
            <FormContainer
              personalInfo={personalInfo}
              education={education}
              experience={experience}
              componentRef={this.componentRef}
              handlePersonalChange={this.handlePersonalChange}
              handleAddEducation={this.handleAddEducation}
              handleAddExperience={this.handleAddExperience}
              handleDelete={this.handleDelete}
              handleChange={this.handleChange}
            />
            <PreviewContainer
              ref={(el) => (this.componentRef = el)}
              personalInfo={personalInfo}
              education={education}
              experience={experience}
            />
          </div>
        </div>
        <ReactToPrint
          trigger={() => {
            return (
              <div className="d-grid col-4 mx-auto">
                <button className="btn btn-success">Generate CV</button>
              </div>
            );
          }}
          content={() => this.componentRef}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
