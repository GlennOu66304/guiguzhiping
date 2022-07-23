// import React, { useState } from "react";
import "./createTicket.css";
import { withRouter } from "react-router-dom";
// import axios from "axios";
import { useHistory } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useRef } from "react";
import TopBar from "../../components/topBar/TopBar";
import { useDispatch } from "react-redux";
import { buildTicket } from "../../redux/auth/slice";
function CreateTicket(props) {
  const history = useHistory();
  const username = useRef();
  const email = useRef();
  const product = useRef();
  const description = useRef();
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(
      buildTicket({
        name: username.current.value,
        email: email.current.value,
        product: product.current.value,
        desc: description.current.value,
      })
    );
    console.log("button is clicked");
  };
  return (
    <div className="tickets-list">
      <TopBar />
      <div className="goback" onClick={history.goBack}>
        {/* go back tab will trigger the router to go back to the previus page 
        Go Back to the Previous Page with React Router v5
        https://thewebdev.info/2021/09/18/how-to-go-back-to-the-previous-page-with-react-router-v5/
        */}
        <FaArrowLeft />
        Back
      </div>

      <div className="guide-text2">
        <h2>Create New Ticket</h2>
        <p>Please fill out the form below</p>
      </div>

      {/* form */}

      <form action="" className="create-ticket" onSubmit={handleClick}>
        <div className="form-group2">
          <label>Customer Name</label> <br />
          <input
            placeholder="Name"
            required
            type="text"
            className="Input"
            ref={username}
          />
        </div>
        <div className="form-group2">
          <label>Customer Email</label> <br />
          <input
            placeholder="Email"
            required
            type="email"
            className="Input"
            ref={email}
          />
        </div>

        <div className="form-group2">
          <label>Product</label> <br />
          <input
            placeholder="Product"
            required
            type="text"
            className="Input"
            ref={product}
          />
        </div>
        <div className="form-group2">
          <label>Description</label> <br />
          <input
            placeholder="Description"
            required
            type="text"
            className="Input"
            ref={description}
          />
        </div>

        <button className="ticket-create-button">Submit</button>
      </form>
    </div>
  );
}
export default withRouter(CreateTicket);
