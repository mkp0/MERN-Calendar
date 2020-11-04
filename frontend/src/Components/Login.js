import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "../CSS/Login.css";
import axios from "axios";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "60vw",
  },
};

// Modal.setAppElement('el')

function Login() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("email, password");
    axios
      .post("http://localhost:3000/signup", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function handleChange(e) {
    let x = e.target;
    if (x.name === "email") {
      setEmail(e.target.value);
    }
    if (x.name === "password") {
      setPassword(e.target.value);
    }
    console.log(email, password);
  }

  useEffect(() => {
    Modal.setAppElement("body");
  }, [email, password]);

  return (
    <div className="login">
      <button onClick={openModal}>Login</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal} className="closeModal">
          &#x2716;
        </button>
        <form>
          <div className="login_title">Login</div>
          <div>
            <div className="login_head">Email Address</div>
            <input
              className="login_input"
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={handleChange}
              required
            ></input>
            <div className="login_head">Password</div>
            <input
              className="login_input"
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={handleChange}
              required
            ></input>
            <button className="btn" onClick={handleSubmit}>
              Submit
            </button>
            <div>
              forgot{" "}
              <a className="link" href="https://www.google.com">
                password?
              </a>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}
export default Login;
