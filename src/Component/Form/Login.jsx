import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
// import { elementAcceptingRef } from "@mui/utils";

const Login = () => {
  const navigate = useNavigate();
  const [loginUser, setLogiUser] = useState({
    email: "",
    password: "",
  });
  const handelChange = (e) => {
    const value = e.target.value;
    setLogiUser({
      ...loginUser,
      [e.target.name]: value,
    });
  };
  // console.log(loginUser);

  let getData = localStorage.getItem("user-information");
  let mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

  // log in function start here

  const handelSubmit = (event) => {
    event.preventDefault();
    if (loginUser.email === "") {
      alert("please enter valid email ");
    } else if (loginUser.email.match(mailformat)) {
      alert("please enter valid email ");
    } else if (loginUser.password === "") {
      alert("Please enter Password");
    } else if (loginUser.password.length < 5) {
      alert("Please enter above 5 digits Password");
    } else {
      if (getData && getData.length) {
        let result = JSON.parse(getData);

        let compair = result.filter((elem) => {
          return (
            elem.email === loginUser.email &&
            elem.password === loginUser.password
          );
        });
        if (compair.length === 0) {
          alert(" invalid user Details ");
        } else {
          alert(`${loginUser.email} login Successfuly`);
          navigate("/");
        }
      }
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
        Log in
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
              <Grid item xs={12} sm={12}>
                <TextField
                  id="outlined-basic"
                  type="email"
                  label="Email"
                  name="email"
                  value={loginUser.email}
                  variant="outlined"
                  fullWidth
                  // required
                  onChange={handelChange}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  name="password"
                  value={loginUser.password}
                  autoComplete="current-password"
                  fullWidth
                  // required
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
                Log in
              </Button>
              <p style={{ textAlign: "center" }}>
                Don't have an Account{" "}
                <Link to={"/registration"}> Register here </Link>
              </p>
            </Grid>
          </CardContent>
        </Card>
      </form>
    </>
  );
};
export default Login;
