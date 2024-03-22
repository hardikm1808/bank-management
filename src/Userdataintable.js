import MUIDataTable from 'mui-datatables';
import React, { useState, useEffect } from 'react';
import logo from './bank-building_23-2147510895.avif'

export default function Userdataintable() {
    const [totalBalance, setTotalBalance] = useState(25);
    const [userDeposit, setUserDeposit] = useState('');
    const [userWithdraw, setUserWithdraw] = useState('');
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        // Retrieve transactions from local storage on component mount
        const storedTransactions = JSON.parse(localStorage.getItem('transactions'));
        if (storedTransactions) {
            setTransactions(storedTransactions);
        }

        // Retrieve total balance from local storage on component mount
        const storedTotalBalance = localStorage.getItem('totalBalance');
        if (storedTotalBalance) {
            setTotalBalance(parseFloat(storedTotalBalance));
        }
    }, []);

    useEffect(() => {
        // Store transactions and total balance in local storage whenever they change
        localStorage.setItem('transactions', JSON.stringify(transactions));
        localStorage.setItem('totalBalance', totalBalance);
    }, [transactions, totalBalance]);

    const handleDeposit = () => {
        if (isNaN(userDeposit)) {
            alert("Please enter a number.");
            setUserDeposit('');
        } else {
            if (userDeposit < 0.01 || userDeposit > 10000) {
                alert("You can only deposit between $0.01 and $10,000.");
                setUserDeposit('');
            } else {
                const depositId = Date.now(); // Generate a unique ID for the deposit
                const deposit = { id: depositId, amount: Number(userDeposit) };
                setTransactions([...transactions, deposit]);
                setTotalBalance(totalBalance + deposit.amount);
                setUserDeposit('');
            }
        }
    };

    const handleWithdraw = () => {
        if (isNaN(userWithdraw)) {
            alert("Please enter a number.");
            setUserWithdraw('');
        } else {
            if (userWithdraw > totalBalance - 5) {
                alert("Your total balance cannot drop below $5.");
                setUserWithdraw('');
            } else {
                const withdrawalId = Date.now(); // Generate a unique ID for the withdrawal
                const withdrawal = { id: withdrawalId, amount: Number(userWithdraw) };
                setTransactions([...transactions, withdrawal]);
                setTotalBalance(totalBalance - withdrawal.amount);
                setUserWithdraw('');
            }
        }
    };

    const [data, setData] = useState(JSON.parse(localStorage.getItem('regData')))

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
            name: "account",
            label: "Account No.",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "deposits",
            label: "Deposits",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "withdrawals",
            label: "Withdrawals",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "totalAmount",
            label: "Total Balance",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "actions",
            label: "Actions",
            options: {
                filter: false,
                sort: false,
                empty: true,
                customBodyRender: (value, tableMeta) => {
                    return (
                        <button onClick={() => handleButtonClick(tableMeta.rowData)}>
                            Action
                        </button>
                    );
                },
            },
        },
    ];

    const options = {
        filterType: 'checkbox',
    };

    const handleButtonClick = () => {

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
                        <a href="/destboardpage">
                            <i class="bi bi-skip-backward-fill"></i>
                            <span className="links_name">Back to My Profile</span>
                        </a>
                    </li>

                </ul>
            </div>
            <br />
            <br />


            <div className="flex mt-5">
                <div className="element-center">
                    <div id="acctBalance">
                        <span className="wrap" />
                        <h1 className='h'>Total Balance</h1>
                        <label className='label' id="acctBalanceLbl">{totalBalance}</label>
                    </div>
                    <div id="inputs">
                        <h2>Deposit</h2>
                        <input type="text" value={userDeposit} onChange={(e) => setUserDeposit(e.target.value)} required="" />
                        <button onClick={handleDeposit}>Deposit</button>
                        <h2>Withdraw</h2>
                        <input type="text" value={userWithdraw} onChange={(e) => setUserWithdraw(e.target.value)} required="" />
                        <button onClick={handleWithdraw}>Withdraw</button>
                    </div>
                </div>
            </div>

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
