import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const [input, setInput] = useState({
    name: "",
    email: "",
    gender: "",
    age: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/getUser/" + id)
      .then((res) => {
        console.log(res);
        setInput(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

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
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/updateUser" + id, input)
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
          className=" flex flex-col gap-4 border-2 px-9 py-8 bg-[#AFB2C0]  "
          onSubmit={handleUpdate}
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
              type="text"
              id="name"
              onChange={handleChange}
              name="name"
              value={input.name}
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
              name="email"
              onChange={handleChange}
              value={input.email}
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
              value={input.gender}
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
              id="age"
              onChange={handleChange}
              value={input.age}
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

export default UpdateUser;
