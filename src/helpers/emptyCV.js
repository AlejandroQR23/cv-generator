export const emptyExperience = {
  position: "",
  company: "",
  city: "",
  startDate: "",
  endDate: "",
};

export const emptyEducation = {
  schoolName: "",
  schoolCity: "",
  degree: "",
  startDate: "",
  gradDate: "",
};

export const emptyCV = {
  personalInfo: {
    firstName: "",
    lastName: "",
    title: "",
    address: "",
    phoneNumber: "",
    email: "",
    description: "",
  },

  // An array with the work experience
  experience: [
    // each array item will represent a job
    emptyExperience,
  ],

  // An array with the education
  education: [
    // each array item will represent a school
    emptyEducation,
  ],
};
