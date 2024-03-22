import React, { useEffect, useState } from 'react';
import MUIDataTable from "mui-datatables";
import logo from './bank-building_23-2147510895.avif'

export default function Statement() {
    const [total, setTotal] = useState(0);
    const [id, setId] = useState(JSON.parse(localStorage.getItem("userid")))
    const [data, setData] = useState([])
    const [Statementdata, setStatementdata] = useState([])

    useEffect(() => {

        if (localStorage.getItem("Statement")) {
            const statementData = JSON.parse(localStorage.getItem("Statement"));
            let myStatement = []

            for (let i = 0; i < statementData.length; i++) {
                if (statementData[i].user == localStorage.getItem('userid')) {
                    myStatement.push(statementData[i])
                    const totalAmount = myStatement.reduce((accumulator, currentValue) => {
                        return accumulator + (currentValue.type === 'credit' ? Number(currentValue.amount) : -Number(currentValue.amount));
                    }, 0);
                    setTotal(totalAmount);
                    setData(myStatement);
                }

            }


            setData(myStatement);


            // const getTable = (user) => {
            //     let loginUserData = []
            //     console.log(user)
            //     for (let i = 0; i < user.length; i++) {

            //         if (user[i].userId == JSON.parse(localStorage.getItem('userid'))) {
            //             loginUserData.push(user[i])
            //             setStatementdata(loginUserData)
            //             console.log(user[i])
            //             const totalAmount = loginUserData.reduce((accumulator, currentValue) => {
            //                 return accumulator + (currentValue.type === 'credit' ? currentValue.amount : -currentValue.amount);
            //             }, 0);
            //             setTotal(totalAmount);
            //         }
            //     }
            // }

        }


    }, []);




    const columns = [
        {
            name: "date",
            label: "Date",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "amount",
            label: "Amount",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "type",
            label: "Type",
            options: {
                filter: true,
                sort: false,
                customBodyRender: (value, tableMeta, updateValue) => {
                    let color = '';
                    if (value === 'credit') {
                        color = 'green';
                    } else if (value === 'debit') {
                        color = 'red';
                    }
                    return <span style={{ color }}>{value}</span>;
                }
            }
        },
        {
            name: 'id',
            label: "Owner ID",
            options: {
                filter: true,
                sort: false,
            }
        },

    ];

    const options = {
        filterType: 'checkbox',
        responsive: 'standard',

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
                    <a className="logotext" href="./index.html">
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
                        <a href="/accountholder">
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
                        <a href="/">
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

                    <div id='marginContent' className='pad-mar'>
                        <h1 className='text-center mb-3'>Statement</h1>
                        <MUIDataTable
                            title={"Account Statement"}
                            data={data}
                            columns={columns}
                            options={options}
                        />
                        <h4 className='text-center m-3'>Total Amount: {total}</h4>
                    </div>

                </div>
            </div>
        </>
    );
}