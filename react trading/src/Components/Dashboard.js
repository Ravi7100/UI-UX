import React from "react";
import "./sb-admin-2.css";
import "./sb-admin-2.js";
import profile from "./undraw_profile.svg";

function Report() {
  return (
    <div className="Dash">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet"
      ></link>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.bundle.min.js"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"
        crossorigin="anonymous"
      ></script>

      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.6.1/chart.min.js"
        crossorigin="anonymous"
      ></script>
      <div id="wrapper">
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <a
            className="sidebar-brand d-flex align-items-center justify-content-center"
            href="#"
          >
            <div className="sidebar-brand-icon ">
              <i className="fas fa-fw fa-chart-area"></i>
            </div>
            <div className="sidebar-brand-text mx-3">Trading </div>
          </a>
          <hr className="sidebar-divider my-0"></hr>
           {/* ..home */}
           <li className="nav-item">
            <a className="nav-link" href="/Home">
              <i className="fa fa-home"></i>
              <span>Home</span>
            </a>
          </li>
          {/* ..home ends */}
          <li className="nav-item">
            <a className="nav-link" href="/Trade">
              <i className="fas fa-fw fa-chart-area"></i>
              <span>Trade</span>
            </a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link" href="/Dashboard">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </a>
          </li>
        </ul>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"></form>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="userDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {/* <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                      Sign out
                    </span> */}
                    <button className="btn btn-outline-primary">Signout</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                      Ravi Teja
                    </span>
                    <img
                      className="img-profile rounded-circle"
                      src={profile}
                    ></img>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="container-fluid">
              <h1 className="h3 mb-4 text-grey-800"></h1>
              <br></br>
              <table class="table table-striped">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Transaction_type</th>
                    <th scope="col">Client_id</th>
                    <th scope="col">Instrument_id</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Report;
