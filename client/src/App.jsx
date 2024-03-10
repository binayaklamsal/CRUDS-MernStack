import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateUser from "./components/UpdateUser";
import CreateUser from "./components/CreateUser";
import Users from "./components/Users";

const App = () => {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Users />}></Route>
            <Route path="/create" element={<CreateUser />}></Route>
            <Route path="/update/:id" element={<UpdateUser />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
