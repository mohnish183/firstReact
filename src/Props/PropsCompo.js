import React from "react";
import FuncCompo from "./FuncCompo";
import ClassCompo from "./ClassCompo";
import { useState } from "react";

function PropsCompo() {
  const [data, setData] = useState("EA24");
  const [data1, setData1] = useState({
    name: "Mohnish",
    age: 25,
    college: "Jharkhand",
  });

  return (
    <>
      {/* <FuncCompo data="EA24" age="25" /> */}
      <ClassCompo value={{ data, setData }} value2={{ data1, setData1 }} />
      <FuncCompo />
    </>
  );
}

export default PropsCompo;
