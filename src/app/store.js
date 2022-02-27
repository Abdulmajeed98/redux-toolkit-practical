import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counterSlice";
import employeesSlice from "../slices/employeesSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    employees: employeesSlice,
  },
});

export default store;
