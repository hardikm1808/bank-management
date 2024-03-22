import React from 'react'
import logo from './bank-building_23-2147510895.avif'


export default function DestBoardPage() {
    return (
        <>
            <nav
                className="navbar navbar-expand-lg "
                style={{
                    zIndex: 1,
                    position: "fixed",
                    width: "100%",
                    backgroundColor: "white",
                    boxShadow: "0px 3px 10px rgb(99, 99, 99)"
                }}
            >
                <div className="container">
                    <a className="logotext" href="/">
                        <img
                            src={logo}
                            style={{ width: 80, height: 80 }}
                        />
                    </a>
                    <h1>Mor & Mor Bank</h1>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <form className="d-flex" role="search">
                            <div className="btn-group" style={{ backgroundColor: "green" }}>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="./ap-personal-details.html">
                                            <i className="bi bi-person-fill" />
                                            Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <i className="bi bi-box-arrow-right" /> Logout
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
            <div className="sidebar" style={{ marginTop: 90, overflow: "hidden" }}>
                <ul className="nav-links p-0">
                    <nav>
                        <div className="sidebar-button">
                            <i className="bx bx-menu sidebarBtn" />
                        </div>
                    </nav>
                    <li>
                        <a href="/userregistration">
                            <i class="bi bi-person-add"></i>
                            <span className="links_name">New User</span>
                        </a>
                    </li>
                    <li>
                        <a href="/manageruserdata">
                            <i class="bi bi-box-arrow-in-right"></i>
                            <span className="links_name">User Login</span>
                        </a>
                    </li>
                    <li>
                        <a href="/table">
                            <i class="bi bi-clipboard-data"></i>
                            <span className="links_name">User Data</span>
                        </a>
                    </li>
                    <li>
                        <a href="/deposite">
                            <i class="bi bi-wallet"></i>
                            <span className="links_name">Deposite</span>
                        </a>
                    </li>
                    <li>
                        <a href="/withdraw">
                            <i class="bi bi-wallet2"></i>
                            <span className="links_name">Withdraw</span>
                        </a>
                    </li>


                </ul>
            </div>
            <br />
            <br />

            <div className='container right'>
                <div className='box'>
                    <div className='row p-3'>
                        <h2 align='center'>Admin Details</h2><br />
                        <br />
                        <br />
                        <hr />
                        <div className='col-lg-6 p-3 col-sm-12'>
                            <h4>Name: <span style={{ color: 'grey', fontSize: '20px' }}>Hardik</span> </h4>
                            <h4>Email: <span style={{ color: 'grey', fontSize: '20px' }}>ahirhardik@gmail.com</span> </h4>
                            <h4>Password: <span style={{ color: 'grey', fontSize: '20px' }}>87654321</span> </h4>
                        </div> <div className='col-lg-6 p-3 col-sm-12'>
                            <h4>DoB: <span style={{ color: 'grey', fontSize: '20px' }}>10/08/2000</span> </h4>
                            <h4>PAN No: <span style={{ color: 'grey', fontSize: '20px' }}>HDRSD5323D</span> </h4>
                            <h4>Mobile No: <span style={{ color: 'grey', fontSize: '20px' }}>8526543575</span> </h4>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
