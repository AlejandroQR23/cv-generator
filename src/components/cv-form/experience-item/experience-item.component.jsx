/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import {
  changeExperienceInput,
  deleteExperienceItem,
} from "../../../redux/cv/cv.slice";

const ExperienceItem = ({ experience, index }) => {
  const { position, company, city, startDate, endDate } = experience;
  const dispatch = useDispatch();

  return (
    <div className="mt-2">
      <input
        type="text"
        placeholder="Position"
        className="form-control"
        name="position"
        value={position}
        onChange={({ target: { name, value } }) => {
          dispatch(changeExperienceInput({ index, name, value }));
        }}
      />
      <input
        type="text"
        placeholder="Company"
        className="form-control"
        name="company"
        value={company}
        onChange={({ target: { name, value } }) => {
          dispatch(changeExperienceInput({ index, name, value }));
        }}
      />
      <input
        type="text"
        placeholder="City"
        className="form-control"
        name="city"
        value={city}
        onChange={({ target: { name, value } }) => {
          dispatch(changeExperienceInput({ index, name, value }));
        }}
      />
      <input
        type="text"
        placeholder="From"
        className="form-control"
        name="startDate"
        value={startDate}
        onChange={({ target: { name, value } }) => {
          dispatch(changeExperienceInput({ index, name, value }));
        }}
      />
      <input
        type="text"
        placeholder="To"
        className="form-control"
        name="endDate"
        value={endDate}
        onChange={({ target: { name, value } }) => {
          dispatch(changeExperienceInput({ index, name, value }));
        }}
      />
      <button
        className="btn btn-danger mb-1"
        type="button"
        onClick={() => {
          dispatch(deleteExperienceItem({ index }));
        }}
      >
        Delete Experience
      </button>
    </div>
  );
};
export default ExperienceItem;
