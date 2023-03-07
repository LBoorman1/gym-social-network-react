import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Register() {
  const [data, setData] = useState({
    username: "",
    password: "",
    emailAddress: "",
    image: [],
  });

  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
    console.log(file);
  };

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setData({ ...data, image: reader.result });
    };
  };

  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const url = "http://localhost:5000/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/Login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col w-1/2 h-full bg-gradient-to-t from-sky-200 via-sky-100 to-sky-300 justify-center items-center">
        <div className="flex flex-col items-center m-10">
          <h1 className="text-sky-700 font poppins font font-extrabold text-6xl">
            FitFeed
          </h1>
          <h2 className="text-sky-600 text-xl font-poppins font-semibold">
            Friendly competition to help you achieve your fitness goals!
          </h2>
        </div>
        <div className="flex gap-10">
          <div className="m-10 w-1/2 h-fit border-2 border-solid border-sky-700 bg-white rounded-lg p-5 text-center drop-shadow-2xl">
            <p className="text-sky-600 font-poppins text-lg">
              Create communities with your friends or fellow gym users and make
              your gym experience much more social!
            </p>
          </div>
          <div className="m-10 w-1/2 h-fit border-2 border-solid border-sky-700 bg-white drop-shadow-2xl rounded-lg p-5 text-center">
            <p className="text-sky-600 font-poppins text-lg">
              Leader boards within communities lead to friendly competition,
              allowing you to gain new motivation to achieve your fitness goals.
              Host events at your gym with timed leader boards, making the
              competition heat up even more!
            </p>
          </div>
        </div>
        <div className="flex w-3/4 h-fit border-2 border-solid border-sky-700 rounded-lg p-5 text-center bg-white drop-shadow-2xl">
          <p className="text-sky-600 font-poppins text-lg ">
            Reporting leader board entries will help communities to become an
            honest, fun environment and allow users to democratically remove
            toxic users from their leader boards.
          </p>
        </div>
      </div>

      <form
        className="flex flex-col items-center justify-center bg-white rounded w-1/2 h-full"
        onSubmit={handleSubmit}
      >
        {" "}
        {/*box around the form */}
        <div className="pt-5">
          {" "}
          {/*  The Register title */}
          <h1 className="text-3xl font-poppins font-bold text-sky-700">
            REGISTER
          </h1>
        </div>
        <div className="flex flex-col md:max-w-3/4 text-xl p-10">
          {" "}
          {/* Box for the elements of the form */}
          <div className="flex flex-col md:flex-row md:justify-between p-2 md:w-2/4">
            {" "}
            {/* This will be username and password */}
            <div className="flex flex-col pr-2">
              {" "}
              {/* One box for username */}
              <label className="text-left font-poppins">Username</label>
              <input
                className="bg-sky-100 p-5 rounded placeholder-sky-700 font-poppins placeholder:opacity-30 text-sky-700"
                type="text"
                placeholder="Username123"
                name="username"
                onChange={handleChange}
                value={data.username}
                required
              />
            </div>
            <div className="flex flex-col">
              {" "}
              {/* One box for password */}
              <label className="text-left font-poppins">Password</label>
              <input
                className="bg-sky-100 p-5 rounded placeholder-sky-700 font-poppins placeholder:opacity-30 text-sky-700"
                type="password"
                placeholder="**********"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
              />
            </div>
          </div>
          <div className="w-full">
            {" "}
            {/* This is for email address */}
            <div className="flex flex-col p-2 ">
              {" "}
              {/* One box for username */}
              <label className="text-left font-poppins">Email Address</label>
              <input
                className="bg-sky-100 p-5 rounded placeholder-sky-700 font-poppins placeholder:opacity-30 text-sky-700"
                type="text"
                placeholder="emailaddress@email.com"
                name="emailAddress"
                onChange={handleChange}
                value={data.emailAddress}
                required
              />
            </div>
            <div className="flex flex-col p-2">
              <label className="text-left font-poppins">Profile photo</label>
              <input
                onChange={handleImage}
                type="file"
                name="image"
                className="flex w-full text-sm text-slate-500 file:mr-4 file:py-5 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100 file:font-poppins font-poppins"
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="bg-sky-100 rounded p-5 hover:bg-sky-200 text-sky-700 font-poppins font-bold"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
