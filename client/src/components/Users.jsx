import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3000/deleteUser/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className=" flex flex-col h-screen  justify-center items-center bg-[#999CA8]  ">
      <div className="w-auto ">
        <Link
          to="/create"
          className=" flex items-end py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
        >
          Add +
        </Link>
      </div>
      <div className="relative  shadow-md sm:rounded-lg bg-[#DBDFF0] overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right ">
          <thead className="text-xs text-gray-700 uppercase ">
            <tr>
              <th scope="col" className="px-6 py-3 bg-[#DBDFF0] text-gray-500">
                SN
              </th>
              <th scope="col" className="px-6 py-3 bg-[#DBDFF0] text-gray-500">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-gray-500">
                Email
              </th>
              <th scope="col" className="px-6 py-3 bg-[#DBDFF0] text-gray-500 ">
                Gender
              </th>
              <th scope="col" className="px-6 py-3 text-gray-500">
                Age
              </th>
              <th scope="col" className="px-6 py-3 bg-[#DBDFF0] text-gray-500">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="">
            {users.map((user, index) => {
              return (
                <tr key={user.id} className="border-b border-gray-200">
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-black-900 whitespace-nowrap bg-[#DBDFF0]"
                  >
                    {index + 1}
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-black-900 whitespace-nowrap bg-[#DBDFF0]"
                  >
                    {user.name}
                  </td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4 bg-[#DBDFF0]">{user.gender}</td>
                  <td className="px-6 py-4">{user.age}</td>
                  <td className="px-6 py-4 bg-[#DBDFF0] flex flex-row text-blue gap-4 cursor-pointer">
                    <Link
                      to={`/update/${user._id}`}
                      className="text-blue-500 hover:bg-white border-[#DBDFF0] outline-none p-2 rounded-md"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={(e) => handleDelete(user._id)}
                      className="text-blue-500 hover:bg-white border-[#DBDFF0] outline-none p-2 rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
