import React from "react";

import "./sb-admin-2.css";
import "./sb-admin-2.js"

function Dashboard() {
  return (
    <div className='Dash'>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"/>
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet"></link>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
        <script src ="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js" crossorigin="anonymous"></script>
        {/* <script src="./sb-admin-2.js"></script> */}

        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.6.1/chart.min.js" crossorigin="anonymous"></script>


      
      <div id="wrapper">
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <a
            className="sidebar-brand d-flex align-items-center justify-content-center"
            href="dashbaord.html"
          >
            <div className="sidebar-brand-icon ">
              <i className="fas fa-fw fa-chart-area"></i>
            </div>
            <div className="sidebar-brand-text mx-3">Trading </div>
          </a>
          <hr className="sidebar-divider my-0"></hr>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </a>
          </li>
          <hr className="sidebar-divider"></hr>
          <div className="sidebar-heading">Interface</div>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Client ID</span>
            </a>
          </li>
          <hr className="sidebar-divider"></hr>
          <div className="sidebar-heading">Addons</div>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-fw fa-chart-area"></i>
              <span>Charts</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-fw fa-table"></i>
              <span>Tables</span>
            </a>
          </li>
          <hr className="sidebar-divider d-none d-md-block"></hr>
          <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle">
              {" "}
            </button>
          </div>
        </ul>

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-light border-0 small"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  ></input>
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow d-sm-none">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="searchDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-search fa-fw"></i>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                    aria-labelledby="searchDropdown"
                  >
                    <form className="form-inline mr-auto w-100 navbar-search">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control bg-light border-0 small"
                          placeholder="Search for..."
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                        ></input>
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="button">
                            <i className="fas fa-search fa-sm"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </li>
                <li className="nav-item dropdown no-arrow mx-1">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="alertsDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-bell fa-fw"></i>
                    <span className="badge badge-danger badge-counter">3+</span>
                  </a>
                  <div
                    className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="alertsDropdown"
                  >
                    <h6 className="dropdown-header">Alerts Center</h6>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div className="mr-3">
                        <div className="icon-circle bg-primary">
                          <i className="fas fa-file-alt text-white"></i>
                        </div>
                      </div>
                      <div>
                        <div className="small text-gray-500">
                          December 12, 2019
                        </div>
                        <span className="font-weight-bold">
                          A new monthly report is ready to download!
                        </span>
                      </div>
                    </a>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div className="mr-3">
                        <div className="icon-circle bg-success">
                          <i className="fas fa-donate text-white"></i>
                        </div>
                      </div>
                      <div>
                        <div className="small text-gray-500">
                          December 7, 2019
                        </div>
                        $290.29 has been deposited into your account!
                      </div>
                    </a>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div className="mr-3">
                        <div className="icon-circle bg-warning">
                          <i className="fas fa-exclamation-triangle text-white"></i>
                        </div>
                      </div>
                      <div>
                        <div className="small text-gray-500">
                          December 2, 2019
                        </div>
                        Spending Alert: We've noticed unusually high spending
                        for your account.
                      </div>
                    </a>
                    <a
                      className="dropdown-item text-center small text-gray-500"
                      href="#"
                    >
                      Show All Alerts
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown no-arrow mx-1">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="messagesDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-envelope fa-fw"></i>
                    <span className="badge badge-danger badge-counter">7</span>
                  </a>
                  <div
                    className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="messagesDropdown"
                  >
                    <h6 className="dropdown-header">Message Center</h6>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div className="dropdown-list-image mr-3">
                        <img
                          className="rounded-circle"
                          src="img/undraw_profile_1.svg"
                          alt="..."
                        ></img>
                        <div className="status-indicator bg-success"></div>
                      </div>
                      <div className="font-weight-bold">
                        <div className="text-truncate">
                          Hi there! I am wondering if you can help me with a
                          problem I've been having.
                        </div>
                        <div className="small text-gray-500">
                          Emily Fowler · 58m
                        </div>
                      </div>
                    </a>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div className="dropdown-list-image mr-3">
                        <img
                          className="rounded-circle"
                          src="img/undraw_profile_2.svg"
                          alt="..."
                        ></img>
                        <div className="status-indicator"></div>
                      </div>
                      <div>
                        <div className="text-truncate">
                          I have the photos that you ordered last month, how
                          would you like them sent to you?
                        </div>
                        <div className="small text-gray-500">Jae Chun · 1d</div>
                      </div>
                    </a>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div className="dropdown-list-image mr-3">
                        <img
                          className="rounded-circle"
                          src="img/undraw_profile_3.svg"
                          alt="..."
                        ></img>
                        <div className="status-indicator bg-warning"></div>
                      </div>
                      <div>
                        <div className="text-truncate">
                          Last month's report looks great, I am very happy with
                          the progress so far, keep up the good work!
                        </div>
                        <div className="small text-gray-500">
                          Morgan Alvarez · 2d
                        </div>
                      </div>
                    </a>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div className="dropdown-list-image mr-3">
                        <img
                          className="rounded-circle"
                          src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                          alt="..."
                        ></img>
                        <div className="status-indicator bg-success"></div>
                      </div>
                      <div>
                        <div className="text-truncate">
                          Am I a good boy? The reason I ask is because someone
                          told me that people say this to all dogs, even if they
                          aren't good...
                        </div>
                        <div className="small text-gray-500">
                          Chicken the Dog · 2w
                        </div>
                      </div>
                    </a>
                    <a
                      className="dropdown-item text-center small text-gray-500"
                      href="#"
                    >
                      Read More Messages
                    </a>
                  </div>
                </li>
                <div className="topbar-divider d-none d-sm-block"></div>
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
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                      Ravi Teja
                    </span>
                    <img
                      className="img-profile rounded-circle"
                      src="img/undraw_profile.svg"
                    ></img>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="userDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                      Profile
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                      Settings
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                      Activity Log
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
            <div className="container-fluid">
              <h1 className="h3 mb-4 text-gray-800"></h1>
              <br></br>
              <form>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <i className="fas fa-fw fa-clipboard-list"></i>
                    <label for="inputAddress2">Client ID</label>
                    <select id="inputAddress2" className="form-control">
                      <option selected disabled>
                        Choose...
                      </option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                  <div className="form-group col-md-4">
                    <i className="fas fa-fw fa-user"></i>
                    <label for="inputAddress">Client Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder="Client Name"
                    ></input>
                  </div>
                  <br></br>
                  <div className="col-md-4">
                    <i className="fas fa-fw fa-clipboard-list"></i>
                    <label for="inputAddress2">Instrument ID</label>
                    <select id="inputAddress2" className="form-control">
                      <option selected disabled>
                        Choose...
                      </option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>

                  <div className="col-md-4">
                    <i className="fas fa-fw fa-clipboard-list"></i>
                    <label for="inputAddress2">Instrument Name</label>
                    <select id="inputAddress2" className="form-control">
                      <option selected disabled>
                        Choose...
                      </option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                  <br></br>
                  <div className="col-md-4">
                    <i className="fas fa-fw fa-clipboard-list"></i>
                    <label for="inputAddress2">Face Value</label>
                    <select id="inputAddress2" className="form-control">
                      <option selected disabled>
                        Choose...
                      </option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                  <br></br>
                  <div className="col-md-4">
                    <i className="fas fa-fw fa-dollar-sign"></i>
                    <label for="balence">Price</label>
                    <input
                      type="text"
                      className="form-control"
                      id="balence"
                      placeholder="****"
                    ></input>
                  </div>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <div className="col-md-4">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <label for="balence">Quantity</label>
                    <input
                      type="text"
                      className="form-control"
                      id="balence"
                      placeholder="****"
                    ></input>
                  </div>
                  <br></br>
                </div>
              </form>
            </div>
            <br></br>
            <br></br>
            {/*               style="justify-content: center;margin:20px;" */}
            <div
              className="form-row"
              style = {{ justifyContent:'center', margin:'0px 20px 0px 20px', }}
            >
              <button
                type="button"
                className="btn btn-outline-primary mr-5 pl-5 pr-5"
              >
                Buy
              </button>
              <button
                type="button"
                className="btn btn-outline-primary ml-5 pl-5 pr-5"
              >
                Sell
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Dashboard
