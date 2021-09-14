import { configureStore } from "@reduxjs/toolkit";

import cvReducer from "./cv/cv.slice";

export default configureStore({
  reducer: {
    cv: cvReducer,
  },
});
