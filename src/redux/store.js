import { configureStore } from "@reduxjs/toolkit";

import cvReducer from "./cv/cvSlice";

export default configureStore({
  reducer: {
    cv: cvReducer,
  },
});
