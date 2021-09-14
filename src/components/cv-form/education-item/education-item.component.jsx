/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import {
  changeEducationInput,
  deleteEducationItem,
} from "../../../redux/cv/cv.slice";

const EducationItem = ({ education, index }) => {
  const { schoolName, schoolCity, degree, startDate, gradDate } = education;
  const dispatch = useDispatch();

  return (
    <div className="mt-2">
      <input
        type="text"
        placeholder="School"
        className="form-control"
        name="schoolName"
        value={schoolName}
        onChange={({ target: { name, value } }) => {
          dispatch(changeEducationInput({ index, name, value }));
        }}
      />
      <input
        type="text"
        placeholder="City"
        className="form-control"
        name="schoolCity"
        value={schoolCity}
        onChange={({ target: { name, value } }) => {
          dispatch(changeEducationInput({ index, name, value }));
        }}
      />
      <input
        type="text"
        placeholder="Degree"
        className="form-control"
        name="degree"
        value={degree}
        onChange={({ target: { name, value } }) => {
          dispatch(changeEducationInput({ index, name, value }));
        }}
      />
      <input
        type="text"
        placeholder="From"
        className="form-control"
        name="startDate"
        value={startDate}
        onChange={({ target: { name, value } }) => {
          dispatch(changeEducationInput({ index, name, value }));
        }}
      />
      <input
        type="text"
        placeholder="To"
        className="form-control"
        name="gradDate"
        value={gradDate}
        onChange={({ target: { name, value } }) => {
          dispatch(changeEducationInput({ index, name, value }));
        }}
      />
      <button
        className="btn btn-danger mb-1"
        type="button"
        onClick={() => {
          dispatch(deleteEducationItem({ index }));
        }}
      >
        Delete Education
      </button>
    </div>
  );
};

export default EducationItem;
