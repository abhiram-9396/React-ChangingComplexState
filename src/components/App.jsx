import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  //it is the second method using spread operator ...
  function update(event) {
    const { name, value } = event.target;
    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  // function update(event) {
  //   const { name, value } = event.target;

  //   setContact((prevValue) => {
  //     if (name === "fName") {
  //       return {
  //         fName: value,
  //         lName: prevValue.lName,
  //         email: prevValue.email
  //       };
  //     } else if (name === "lName") {
  //       return {
  //         fName: prevValue.fName,
  //         lName: value,
  //         email: prevValue.email
  //       };
  //     } else if (name === "email") {
  //       return {
  //         fName: prevValue.fName,
  //         lName: prevValue.lName,
  //         email: value
  //       };
  //     }
  //   });
  // }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          value={contact.fName}
          onChange={update}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
          onChange={update}
        />
        <input
          name="email"
          placeholder="Email"
          value={contact.email}
          onChange={update}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
