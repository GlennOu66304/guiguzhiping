import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
// import TicketsList from "./pages/ticketsList/TicketsList";
// import CreateTicket from "./pages/createTicket/CreateTicket";
// import SingleTicket from "./pages/singleTicket/SingleTicket";
// import TopBar from "../src/components/topBar/TopBar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// private router
// import PrivateRoute from "./PrivateRoute.jsx";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        {/* <PrivateRoute path="/dashboard" component={TicketsList} />
        <PrivateRoute path="/createticket" component={CreateTicket} />
        <PrivateRoute path="/ticket/:id" component={SingleTicket} /> */}
      </Switch>
    </Router>
  );
}

export default App;
