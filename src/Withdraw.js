import React, { useEffect, useState } from 'react'
import logo from './bank-building_23-2147510895.avif'
import MUIDataTable from 'mui-datatables'

export default function Withdraw() {

    const [withdraw, setwithdraw] = useState([]);
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');
    const [totalBalance, setTotalBalance] = useState(0);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('regData')) {
            setData(JSON.parse(localStorage.getItem('regData')))
        }
        if (localStorage.getItem('Statement')) {
            console.log(JSON.parse(localStorage.getItem('Statement')))
            setwithdraw(JSON.parse(localStorage.getItem('Statement')));

        }
    }, []);

    const handleWithdraw = (id) => {
        if (isNaN(amount)) {
            alert("Please enter a number.");
            setAmount('');
        } else {
            // Find the user's data
            const user = data.find(user => user.id === id);
            if (!user) {
                alert("User not found.");
                return;
            }

            // Check if the withdrawal amount is greater than the balance
            if (parseFloat(amount) > user.balance) {
                alert("You cannot withdraw more than your total balance.");
                setAmount('');
                return;
            }


            // Update the balance
            const newBalance = user.balance - parseFloat(amount);
            user.balance = newBalance;

            // Update data state
            const updatedData = data.map(item => {
                if (item.id === id) {
                    return user;
                }
                return item;
            });
            setData(updatedData);
            localStorage.setItem('regData', JSON.stringify(updatedData));

            // Create withdrawal object
            const obj = {
                date: date,
                amount: amount,
                type: 'debit',
                user: id,
                id: Date.now(),
            };

            // Update withdrawals
            setwithdraw(prevWithdraw => [...prevWithdraw, obj]);
            localStorage.setItem('Statement', JSON.stringify([...withdraw, obj]));

            // Update total balance
            setTotalBalance(prevTotalBalance => prevTotalBalance - parseFloat(amount));
            setAmount('');

            alert('Money Withdrawn Successfully');
        }
    };



    const columns = [
        {
            name: 'full_name',
            label: 'Name',
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: 'account',
            label: 'Account No.',
            options: {
                filter: true,
                sort: false,
            },
        },
        {
            name: 'date',
            label: 'Select Date',
            options: {
                filter: true,
                sort: true,
                customBodyRender: () => {
                    return <input type='date' value={date} onChange={(e) => setDate(e.target.value)} />;
                },
            },
        },
        {
            name: 'balance',
            label: 'Total Balance',
            options: {
                filter: true,
                sort: false,
            },
        },
        {
            name: 'amount',
            label: 'Amount',
            options: {
                filter: true,
                sort: true,
                customBodyRender: () => {
                    return <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} />;
                },
            },
        },
        {
            name: 'id',
            label: 'Deposit',
            options: {
                filter: false,
                sort: false,
                empty: true,
                customBodyRender: (value) => {
                    return (
                        <button onClick={() => handleWithdraw(value)} style={{ backgroundColor: 'red' }}>
                            Withdraw
                        </button>
                    );
                },
            },
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
                <div className='box me-5'>

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
