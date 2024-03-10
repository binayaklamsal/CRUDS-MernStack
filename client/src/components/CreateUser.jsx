import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  // const [name, setname] = useState();
  // const [email, setEmail] = useState();
  // const [gender, setGender] = useState();
  // const [age, setAge] = useState();

  const [input, setInput] = useState({
    name: "",
    email: "",
    gender: "",
    age: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setInput((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/createUser", input)
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-[#424348] h-screen">
      <div className=" max-w-sm mx-auto ">
        <form
          className=" flex flex-col gap-4 border-2 px-9 py-8 bg-[#AFB2C0] "
          onSubmit={handleSubmit}
        >
          <h1 className="font-bold "> Fill Form to Create User</h1>
          <div>
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Name
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="name"
              name="name"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
            ></input>
          </div>
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your email
            </label>
            <input
              type="email"
              onChange={handleChange}
              name="email"
              id="email"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            ></input>
          </div>
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Gender
            </label>
            <input
              type="text"
              onChange={handleChange}
              name="gender"
              id="gender"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
            ></input>
          </div>
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Age
            </label>
            <input
              type="number"
              onChange={handleChange}
              id="age"
              name="age"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
            ></input>
          </div>
          <button
            type="submit"
            className="bg-[#838690] flex items-center justify-center w-[80px]  py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
