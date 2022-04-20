import React from "react";
import {  useNavigate } from "react-router-dom";

const Welcome = (props) => {
  const navigate = useNavigate();

  return <>
              {<button onClick={() => { navigate("/Tutorial") }}>
                Vai al Tutorial
            </button>
            }
  </>;
};

export default Welcome;
