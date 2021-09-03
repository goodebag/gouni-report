import React from "react";
import PropsTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authAction";
import logo from "./image/img-user.jpeg";
import wall from "./image/user-info.jpg";

const SideBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(
      logout(
        setTimeout(() => {
          history.push("/login");
        }, 3000)
      )
    );
  };

  return (
    <aside className="left-sidebar">
      <div className="scroll-sidebar">
        <div
          className="user-profile"
          style={{ background: `url(${wall}) no-repeat` }}
        >
          <div className="profile-img">
            <img src={logo} alt="user" className="w-100 rounded-circle" />
          </div>
        </div>
        <nav className="sidebar-nav">
          <ul id="sidebarnav">
            <li className="sidebar-item">
              <a
                className="sidebar-link waves-effect waves-dark"
                href="/"
                aria-expanded="false"
              >
                <i className="mdi mdi-gradient" />
                <span className="hide-menu">Dashboard </span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link waves-effect waves-dark"
                href="/candidates"
                aria-expanded="false"
              >
                <i className="mdi mdi-collage" />
                <span className="hide-menu">Admitted Candidates </span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link waves-effect waves-dark"
                href="/sessions"
                aria-expanded="false"
              >
                <i className="mdi mdi-widgets" />
                <span className="hide-menu">UnAdmitted Candidates </span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link has-arrow waves-effect waves-dark" href="#!">
                <i className="mdi mdi-dns"></i>
                <span className="hide-menu">Payments </span>
              </a>
              <ul className="collapse first-level">
                <li className="sidebar-item">
                  <a href="/allpayments" className="sidebar-link">
                    <i className="mdi mdi-adjust"></i>
                    <span className="hide-menu">All Payments </span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/onlinepayment" className="sidebar-link">
                    <i className="mdi mdi-adjust"></i>
                    <span className="hide-menu">Online Payment</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="/offlinepayment" className="sidebar-link">
                    <i className="mdi mdi-adjust"></i>
                    <span className="hide-menu">Offline Payment</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="sidebar-item">
              <span
                className="sidebar-link waves-effect waves-dark"
                style={{ cursor: "pointer" }}
                aria-expanded="false"
                onClick={handleLogout}
              >
                <i className="fa fa-power-off"></i>
                <span className="hide-menu">Logout </span>
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

SideBar.propsTypes = {
  logout: PropsTypes.func.isRequired,
};

export default SideBar;
