import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";

import store from "./redux/store";
import Authorize from "./utils/Authorize";
import Authenticated from "./utils/Authenticated";
import Loader from "./components/Reusables/Loader/Loader";
import Dashboard from "./components/Dashboard";
import Login from "./components/Auth/Login";
import RegisterStudent from "./components/RegisterStudent";
import Students from "./components/Students";
import Student from "./components/Student";
import UnadmittedCandidate from "./components/UnadmittedCandidate";
import PaymentsSession from "./components/PaymentsSession";
import Sessions from "./components/Sessions";
import AllPayments from "./components/Payments/AllPayments";
import OfflinePayment from "./components/Payments/OfflinePayment";
import OnlinePayment from "./components/Payments/OnlinePayment";
import StudentPayment from "./components/StudentPayment";
import NotFound from "./components/NotFound/NotFound";
import checkToken from "./utils/checkToken";

export default function App() {
  useEffect(() => {
    checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkToken()]);

  return (
    <Provider store={store}>
      <Router>
        <div id="main-wrapper">
          <Loader />
          <Switch>
            <Route exact path="/" component={Authorize(Dashboard)} />
            <Route exact path="/login" component={Authenticated(Login)} />
            <Route
              exact
              path="/student"
              component={Authorize(RegisterStudent)}
            />
            <Route exact path="/students" component={Authorize(Students)} />
            <Route exact path="/student/:id" component={Authorize(Student)} />
            <Route
              exact
              path="/unadmittedcandidate"
              component={Authorize(UnadmittedCandidate)}
            />
            <Route exact path="/sessions" component={Authorize(Sessions)} />
            <Route
              exact
              path="/allpayments"
              component={Authorize(AllPayments)}
            />
            <Route
              exact
              path="/offlinepayment"
              component={Authorize(OfflinePayment)}
            />
            <Route
              exact
              path="/onlinepayment"
              component={Authorize(OnlinePayment)}
            />
            <Route
              exact
              path="/payment/:paymentId"
              component={Authorize(StudentPayment)}
            />
            <Route
              exact
              path="/payments/:personId/:sessionId"
              component={Authorize(PaymentsSession)}
            />
            <Route component={Authenticated(NotFound)} />
          </Switch>
          <NotificationContainer />
        </div>
      </Router>
    </Provider>
  );
}
