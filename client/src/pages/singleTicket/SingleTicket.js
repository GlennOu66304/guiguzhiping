import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./singleTicket.css";
import { useParams, useHistory } from "react-router-dom";

import TopBar from "../../components/topBar/TopBar";
import { FaArrowLeft } from "react-icons/fa";
import { loadAticket } from "../../redux/auth/slice";
function SignleTicket() {
  let { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { ticket } = useSelector((state) => state.user);
  console.log(ticket);
  useEffect(() => {
    dispatch(loadAticket(id));
  }, [dispatch, id]);

  return (
    <div className="single-ticket">
      <TopBar />
      <div className="goback" onClick={history.goBack}>
        {/* go back tab will trigger the router to go back to the previus page */}
        <FaArrowLeft />
        Back
      </div>
      <h2>Ticket ID:{ticket._id}</h2>
      <h3>Date Submitted:{ticket.createdAt}</h3>
      <h3>Product:{ticket.product}</h3>
      <hr />
      <div className="description_issue">
        <h3>Description of issue</h3>
        {ticket.desc}
      </div>

      <button>Close Ticket</button>
    </div>
  );
}
export default SignleTicket;
