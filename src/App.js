import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Counter from "./pages/Counter";
import Employees from "./pages/Employees";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </>
  );
}

export default App;
