import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Welcome = ({ currentUser }) => {
  return (
    <Container>
      <img src={Robot} alt="Robot" />
      <h1>
        Welcome,<span>{currentUser.username}!</span>
      </h1>
      <h3>Please Select the chat to start the chat</h3>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;
export default Welcome;
