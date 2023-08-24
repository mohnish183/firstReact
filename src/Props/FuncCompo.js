function FuncCompo(props) {
  console.log(props.value);
  return (
    <>
      {/* {props.data}
      {props.age} */}
      <h1 style={{ color: "red" }}>
        This is child component form :- FuncCompo Components
      </h1>
    </>
  );
}

export default FuncCompo;
