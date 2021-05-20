// import { useState } from "react";
import Element from "./Element";
import "./styles.css";

export default function App() {
  // const [name, setName] = useState("");

  const json = [
    {
      type: "text",
      id: "nameField",
      label: "Name",
      regex: "^[a-zA-Z]*$",
      validate: (a, b) => {
        // console.log(a, b);
      }
    },
    {
      type: "number",
      id: "numberField",
      label: "Phone Number",
      regex: "^[0-9]+$",
      validate: (a, b) => {
        // console.log(a, b);
      }
    }
  ];
  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target[0].id);
          console.log(e.target[1].id);
        }}
      >
        {json.map((jsonValue, i) => {
          return (
            <div key={i}>
              <Element param={jsonValue} />
            </div>
          );
        })}
        <button>Submit</button>
      </form>
    </div>
  );
}
