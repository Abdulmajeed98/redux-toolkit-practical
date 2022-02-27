import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSelectedEmployee } from "../slices/employeesSlice";

const Employees = () => {
  const employees = useSelector((state) => state.employees.employees);
  const dispatch = useDispatch();
  const handleSelection = (employeeId) => {
    dispatch(updateSelectedEmployee(employeeId));
  };
  return (
    <div className="py-6 px-8">
      <h2 className="text-4xl text-purple-700">Employees</h2>
      <p className="mt-4 text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, alias
        deleniti modi aliquid ipsum nam eius qui, ea aut accusantium ad? In ex
        quibusdam temporibus similique sit? Inventore, incidunt error.
      </p>
      <div className="mt-4 flex py-4">
        <div className="flex-1 px-4">
          <ul className="rounded-md border border-black border-opacity-25 p-4 shadow-md">
            {employees &&
              employees.map((employee) => (
                <li
                  key={employee.id}
                  className="m-4 flex items-center rounded-md border border-black border-opacity-25 py-2 px-4"
                >
                  <input
                    type="checkbox"
                    className="mr-2 h-4 w-4"
                    checked={employee.isSelected}
                    onChange={() => handleSelection(employee.id)}
                  />
                  {employee.name}
                </li>
              ))}
          </ul>
        </div>
        <div className="flex-1 px-4">
          <ul className="rounded-md border border-black border-opacity-25 p-4 shadow-md">
            {employees &&
              employees.map(
                (employee) =>
                  employee.isSelected && (
                    <li
                      key={employee.id}
                      className="m-4 rounded-md border border-black border-opacity-25 py-2 px-4"
                    >
                      <p>
                        <span>Name:</span> {employee.name}
                      </p>
                      <p>
                        <span>Email:</span> {employee.email}
                      </p>
                      <p>
                        <span>Username:</span> {employee.username}
                      </p>
                    </li>
                  )
              )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Employees;
