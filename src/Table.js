import MUIDataTable from 'mui-datatables';
import React, { useEffect, useState } from 'react'
import logo from './bank-building_23-2147510895.avif'

export default function Table() {

    const [data, setData] = useState([])

    useEffect(() => {
        if (localStorage.getItem('regData')) {
            setData(JSON.parse(localStorage.getItem('regData')))
        }
    }, []);

    const columns = [
        {
            name: "full_name",
            label: "Name",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "email",
            label: "Email",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "password",
            label: "Password",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "dob",
            label: "DoB",
            options: {
                filter: true,
                sort: false,
            }
        }, {
            name: "pan",
            label: "PAN No.",
            options: {
                filter: true,
                sort: false,
            }
        }, {
            name: "mobile",
            label: "Mobile No.",
            options: {
                filter: true,
                sort: false,
            }
        }, {
            name: "account",
            label: "Account No.",
            options: {
                filter: true,
                sort: false,
            }
        },
    ];

    const options = {
        filterType: 'checkbox',
    };


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
                        <a href="/destboardpage">
                            <i class="bi bi-skip-backward-fill"></i>
                            <span className="links_name">Back to My Profile</span>
                        </a>
                    </li>

                </ul>
            </div>
            <br />
            <br />

            <div className='container right'>
                <div className='box'>

                    <MUIDataTable
                        title={"User List"}
                        data={data}
                        columns={columns}
                        options={options}
                    />

                </div>
            </div>

        </>
    )
}
