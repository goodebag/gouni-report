import React, { useEffect } from "react";
import PropsTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, getUser } from "../../../redux/actions/authAction";
import brand from "./image/brand-user.png";
import logo from "./image/img-user.jpeg";
import SearchBox from "../SearchBox/SearchBox";
import SearchBoxItem from "../SearchBox/SearchBoxItem";

const Header = () => {
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    <header className="topbar">
      <nav className="navbar top-navbar navbar-expand-md navbar-dark">
        <div className="navbar-header">
          <span
            className="nav-toggler waves-effect waves-light d-block d-md-none"
            style={{ cursor: "pointer" }}
          >
            <i className="ti-menu ti-close" />
          </span>
          <Link className="navbar-brand" to="#">
            <b className="logo-icon d-flex">
              <img
                src={brand}
                alt="homepage"
                className="light-logo"
                width="50"
              />
            </b>
            <span
              className="logo-text font-weight-bold"
              style={{ fontSize: "19px" }}
            >
              Gouni Report
            </span>
          </Link>
          <ul className="navbar-nav float-right d-block d-md-none">
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle waves-effect waves-dark"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ cursor: "pointer" }}
              >
                <img
                  src={logo}
                  alt="user"
                  width="40"
                  className="profile-pic rounded-circle"
                />
              </span>
              <div className="dropdown-menu mailbox dropdown-menu-right scale-up border rounded shadow pb-0">
                <ul className="dropdown-user list-style-none">
                  <li>
                    <div className="dw-user-box p-2 d-flex">
                      <div className="u-img">
                        <img
                          src={logo}
                          alt="user"
                          className="rounded-circle"
                          width="80"
                        />
                      </div>
                      <div className="u-text ml-2">
                        <h4 className="mt-2 mb-0">{user.fullname}</h4>
                        <span className="btn rounded btn-primary btn-sm text-white d-inline-block">
                          {user.role}
                        </span>
                      </div>
                    </div>
                  </li>
                  <li role="separator" className="dropdown-divider my-0"></li>
                  <li className="user-list">
                    <Link className="px-3 py-0" to="#">
                      <i className="ti-user"></i> My Profile
                    </Link>
                  </li>
                  <li role="separator" className="dropdown-divider my-0"></li>
                  <li className="user-list">
                    <Link className="px-3 py-0" to="#">
                      <i className="ti-settings"></i> Account Setting
                    </Link>
                  </li>
                  <li role="separator" className="dropdown-divider my-0"></li>
                  <li className="user-list">
                    <Link className="px-3 py-0" to="#" onClick={handleLogout}>
                      <i className="fa fa-power-off"></i> Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="navbar-collapse collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto float-left">
            <li className="nav-item">
              {" "}
              <span
                className="nav-link sidebartoggler d-none d-md-block waves-effect waves-dark"
                style={{ cursor: "pointer" }}
              >
                <i className="ti-menu" />
              </span>
            </li>
          </ul>
          <SearchBox />
          <SearchBoxItem />
          <ul className="navbar-nav float-right">
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle waves-effect waves-dark"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ cursor: "pointer" }}
              >
                <img
                  src={logo}
                  alt="user"
                  width="40"
                  className="profile-pic rounded-circle"
                />
              </span>
              <div className="dropdown-menu mailbox dropdown-menu-right scale-up border rounded shadow pb-0">
                <ul className="dropdown-user list-style-none">
                  <li>
                    <div className="dw-user-box p-3 d-flex">
                      <div className="u-img">
                        <img
                          src={logo}
                          alt="user"
                          className="rounded-circle"
                          width="70"
                        />
                      </div>
                      <div className="u-text ml-2">
                        <h4 className="my-2">{user.fullname}</h4>
                        <span className="btn rounded btn-primary btn-sm text-white d-inline-block">
                          {user.role}
                        </span>
                      </div>
                    </div>
                  </li>
                  <li role="separator" className="dropdown-divider my-0" />
                  <li className="user-list">
                    <Link className="px-3 py-3" to="/profile">
                      <i className="ti-user" /> My Profile
                    </Link>
                  </li>
                  <li role="separator" className="dropdown-divider my-0" />
                  <li className="user-list">
                    <Link className="px-3 py-3" to="/setting">
                      <i className="ti-settings" /> Account Setting
                    </Link>
                  </li>
                  <li role="separator" className="dropdown-divider my-0" />
                  <li className="user-list">
                    <Link className="px-3 py-3" to="#" onClick={handleLogout}>
                      <i className="fa fa-power-off" /> Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

Header.propsTypes = {
  logout: PropsTypes.func.isRequired,
};

export default Header;
