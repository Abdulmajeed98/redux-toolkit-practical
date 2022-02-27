import { createSlice } from "@reduxjs/toolkit";
import { EmployeeService } from "../services/employeeService";

const initialState = {
  employees: EmployeeService.getAllEmployees(),
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    updateSelectedEmployee: (state, action) => {
      state.employees = state.employees.map((employee) => {
        if (employee.id === action.payload) {
          return {
            ...employee,
            isSelected: !employee.isSelected,
          };
        }
        return employee;
      });
    },
  },
});

export const { updateSelectedEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
