import { useState } from "react";

function FuncCompo() {
  return (
    <div>
      <h1>This is function compo</h1>
    </div>
  );
}

export default FuncCompo;

function FuncCompoOne() {
  return (
    <>
      <h2 style={{ color: "blue" }}>This is second function</h2>
    </>
  );
}

function DisplayData() {
  const [count, setCount] = useState(true);
  console.log(count);
  return (
    <div>
      <button onClick={() => setCount(!count)}>function count</button>

      <h1>hello display</h1>
    </div>
  );
}
export { FuncCompoOne, DisplayData };
