import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Registration = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handelChange = (v) => {
    const fillValue = v.target.value;
    setUserData({
      ...userData,
      [v.target.name]: fillValue,
    });
  };

  // Submit Function for Sign up form
  const handelSubmit = (event) => {
    event.preventDefault();
    //form validation
    let mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if (
      userData.username === "" &&
      userData.email === "" &&
      userData.password === ""
    ) {
      alert("Please Enter ALl Details");
    } else if (userData.username === "") {
      alert("please Enter  Username");
    } else if (userData.email === "") {
      alert("Please Enter Email field");
    } else if (userData.email.match(mailformat)) {
      alert("Please Enter valid Email field");
    } else if (userData.password === "") {
      alert("Please Enter password Field");
    } else if (userData.password.length < 5) {
      alert("Please Enter Above 5 Numbers Password");
    } else {

      alert("Registration Succesfull")
      localStorage.setItem("user-information", JSON.stringify([userData]));
      navigate("/login");
    }
  };

  return (
    <>
      <Navbar />
      <Typography
        variant="h3"
        component="h2"
        style={{
          textAlign: "center",
          marginTop: "112px",
          height: "100%",
          fontWeight: "100%",
          fontWeight: "500",
        }}
      >
        Registration
      </Typography>
      <form onSubmit={handelSubmit}>
        <Card
          style={{
            width: "500px",
            margin: "auto",
          }}
        >
          <CardContent>
            <Grid
              container
              spacing={2}
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* <Grid item xs={12} sm={12}>
                <TextField
                  id="outlined-basic"
                  label="Id"
                  variant="outlined"
                  name="id"
                  value={userData.id}
                  onChange={handelChange}
                  fullWidth
                  required
                />
              </Grid> */}
              <Grid item xs={12} sm={12}>
                <TextField
                  id="outlined-basic"
                  label="UserName"
                  variant="outlined"
                  name="username"
                  value={userData.username}
                  onChange={handelChange}
                  fullWidth
                  //   required
                />
              </Grid>{" "}
              <br />
              <Grid item xs={12} sm={12}>
                <TextField
                  id="outlined-basic"
                  type="email"
                  label="Email"
                  name="email"
                  value={userData.email}
                  variant="outlined"
                  fullWidth
                  //   required
                  onChange={handelChange}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  name="password"
                  value={userData.password}
                  autoComplete="current-password"
                  fullWidth
                  //   required
                  onChange={handelChange}
                />
              </Grid>
              <Button
                type="submit"
                variant="contained"
                style={{
                  margin: "12px",
                }}
              >
                Sign Up
              </Button>
              <p style={{ textAlign: "center" }}>
                Already have an Account <Link to={"/Login"}> Log in </Link>
              </p>
            </Grid>
          </CardContent>
        </Card>
      </form>
    </>
  );
};
export default Registration;
