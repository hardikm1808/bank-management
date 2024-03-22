import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import logo from './bank-building_23-2147510895.avif'


export default function Accountholder() {

    const [AccountHolder, setAccountHolder] = useState([])
    const [HolderDetail, setHolderDetail] = useState([])

    useEffect(() => {
        if (localStorage.getItem('regData')) {
            setAccountHolder(JSON.parse(localStorage.getItem('regData')))
        }
    }, [])

    useEffect(() => {
        getuser()
    }, [AccountHolder])

    let userid = localStorage.getItem('userid')

    const getuser = () => {
        for (let i = 0; i < AccountHolder.length; i++) {
            if (AccountHolder[i].id == userid) {
                setHolderDetail(AccountHolder[i])
            }
        }
    }

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
                        <a href="#">
                            <i class="bi bi-person-lines-fill"></i>
                            <span className="links_name">Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="/bankbalance">
                            <i class="bi bi-clipboard-data"></i>
                            <span className="links_name">Statement</span>
                        </a>
                    </li>
                    <li>
                        <a href="/destboardpage">
                            <i class="bi bi-box-arrow-left"></i>
                            <span className="links_name">Log Out</span>
                        </a>
                    </li>

                </ul>
            </div>
            <br />
            <br />

            <div className='container right'>
                <div className='box'>

                    <h1 align='center'>Account Holder Details</h1><br />
                    <hr />
                    <br />
                    <Row className='m-2'>
                        <Col>
                            <h5>Name:- <span style={{ color: 'grey', fontSize: '20px' }}> {HolderDetail.full_name}</span> </h5>

                            <h5>Email:- <span style={{ color: 'grey', fontSize: '20px' }}> {HolderDetail.email}</span></h5>
                        </Col>
                        <Col>
                            <h5>Password:- <span style={{ color: 'grey', fontSize: '20px' }}> {HolderDetail.password}</span></h5>

                            <h5>DoB:- <span style={{ color: 'grey', fontSize: '20px' }}> {HolderDetail.dob}</span></h5>
                        </Col>
                        <Col>
                            <h5>PAN No:- <span style={{ color: 'grey', fontSize: '20px' }}> {HolderDetail.pan}</span></h5>

                            <h5>Mobile No:- <span style={{ color: 'grey', fontSize: '20px' }}> {HolderDetail.mobile}</span></h5>
                        </Col>
                    </Row>

                </div>
            </div>
        </>
    )
}