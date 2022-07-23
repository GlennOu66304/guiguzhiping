import React, { useEffect } from "react";
import "./ticketsList.css";
import { FaArrowLeft } from "react-icons/fa";
import { withRouter,useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import TopBar from "../../components/topBar/TopBar";
import Ticket from "../../components/ticket/Ticket";
import { loadtickets } from "../../redux/auth/slice";
function TicketsList() {
  // useSelector call the reducer in the store not the inital state from the slice
  const { tickets } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // console.log(tickets.length);
  const history = useHistory();
  // Conditionally Running Effects
  // https://typeofnan.dev/fix-the-react-hook-is-called-conditionally-error-in-react/
  useEffect(() => {
    if (tickets.length === 0) {
      dispatch(loadtickets());
    }
  }, [dispatch, tickets.length]);

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
      <h2 className="title">Tickets</h2>
      {/* taable section :date,products,status*/}
      <div className="sections-name">
        <span className="date">Date</span>
        <span className="desc">desc</span>
        <span className="status">username</span>
        {/* table data :data of date, produca name, status, button to trigger the ticket details*/}
      </div>
      <div className="data-display">
        {tickets.map((item) => (
          <Ticket key={item._id} item={item} />
        ))}

        {/* tickets.map to render the component to achievement */}
      </div>
    </div>
  );
}
export default withRouter(TicketsList);
