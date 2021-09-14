/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import {
  emptyCV,
  emptyEducation,
  emptyExperience,
} from "../../helpers/emptyCV";

import { changeInput, deleteInput } from "./cv.utils";

export const cvSlice = createSlice({
  name: "cv",
  initialState: emptyCV,
  reducers: {
    handlePersonalChange: (state, action) => {
      const { value, name } = action.payload;
      state.personalInfo = {
        ...state.personalInfo,
        [name]: value,
      };
    },

    addEducationItem: (state) => {
      state.education = [...state.education, emptyEducation];
    },

    addExperienceItem: (state) => {
      state.experience = [...state.experience, emptyExperience];
    },

    changeEducationInput: (state, action) => {
      state.education = changeInput(state.education, action.payload);
    },

    changeExperienceInput: (state, action) => {
      state.experience = changeInput(state.experience, action.payload);
    },

    deleteEducationItem: (state, action) => {
      const { index } = action.payload;
      state.education = deleteInput(state.education, index);
    },
    deleteExperienceItem: (state, action) => {
      const { index } = action.payload;
      state.experience = deleteInput(state.experience, index);
    },
  },
});

// * Actions
export const {
  handlePersonalChange,
  addEducationItem,
  addExperienceItem,
  changeEducationInput,
  changeExperienceInput,
  deleteEducationItem,
  deleteExperienceItem,
} = cvSlice.actions;

// * Selectors
export const selectPersonalInfo = (state) => state.cv.personalInfo;
export const selectEducation = (state) => state.cv.education;
export const selectExperience = (state) => state.cv.experience;

// * Reducer
export default cvSlice.reducer;
