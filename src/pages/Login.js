import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserInfo } from "../redux/reducers/UserSlice";

function Login() {
  const [data, setData] = useState({
    password: "",
    emailAddress: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const url = "http://localhost:5000/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      dispatch(getUserInfo());
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-full bg-sky-50">
      {/*overall*/}

      <div className="flex items-center justify-center p-10 h-full">
        {/* The background */}
        <form
          className="flex flex-col items-center justify-center rounded"
          onSubmit={handleSubmit}
        >
          {/*box around the form */}
          <div>
            {/*  The Register title */}
            <h1 className="text-3xl font-poppins font-bold text-sky-700">
              LOGIN
            </h1>
          </div>
          <div className="md:max-w-3/4 text-xl p-10 ">
            {/* Box for the elements of the form */}
            <div className="w-full">
              {/* This is for email address */}
              <div className="flex flex-col p-2 ">
                {/* One box for username */}
                <label className="text-left font-poppins">Email Address</label>
                <input
                  className="bg-sky-100 p-5 text-sky-700 placeholder:opacity-30 placeholder:text-sky-700 rounded font-poppins focus:border focus:border-solid focus:border-sky-700"
                  type="text"
                  placeholder="Email Address"
                  name="emailAddress"
                  onChange={handleChange}
                  value={data.emailAddress}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between p-2 md:w-2/4">
              {/* This will be username and password */}
              <div className="flex flex-col">
                {/* One box for password */}
                <label className="text-left font-poppins">Password</label>
                <input
                  className="bg-sky-100 p-5 text-sky-700 placeholder:opacity-30 placeholder:text-sky-700 rounded font-poppins focus:border focus:border-solid focus:border-sky-700"
                  type="password"
                  placeholder="************"
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                  required
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
    </div>
  );
}

export default Login;
