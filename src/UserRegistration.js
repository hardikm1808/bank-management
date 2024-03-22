import React, { useEffect, useState } from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import logo from './bank-building_23-2147510895.avif'


export default function UserRegistration() {

    const [data, setData] = useState(JSON.parse(localStorage.getItem('regData')))
    const nevigate = useNavigate();



    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('regData')) || [];
        for (let i = 0; i < storedData.length; i++) {

        }
        setData(storedData);

    }, []);

    const formik = useFormik({
        initialValues: {
            full_name: "",
            email: "",
            password: "",
            dob: "",
            pan: "",
            mobile: "",
            account: "",

        },
        validationSchema: Yup.object({
            full_name: Yup.string()
                .min(2, "Mininum 2 characters")
                .max(15, "Maximum 15 characters")
                .required("Required!"),
            email: Yup.string()
                .email("Invalid email format")
                .required("Required!"),
            password: Yup.string()
                .min(1, "Minimum 8 characters")
                .required("Required!"),
            dob: Yup.string()
                .required("Required!"),
            pan: Yup.string()
                .required("Required!")
                .matches(
                    /^[A-Z]{5}[0-9]{4}[A-Z]{1}/
                ),
            mobile: Yup.string()
                .min(10, "Minimum 10 characters")
                .max(10, "Maximum 10 characters")
                .matches(
                    /^[6-9]{1}[0-9]{9}/
                ),
            account: Yup.string()
                .min(10, "Minimum 10 characters")
                .max(10, "Maximum 10 characters")
                .matches(
                    /^[1-2]{1}[0-9]{9}/
                )


        }),
        onSubmit: values => {
            let emailcheck = false;
            for (let index = 0; index < data.length; index++) {
                if (data[index].email === values.email) {
                    emailcheck = true
                }
            }

            let accountcheck = false;
            for (let index = 0; index < data.length; index++) {
                if (data[index].account == values.account) {
                    accountcheck = true
                }
            }
            if (emailcheck) {
                alert("Already Registration this Email");
            }
            if (accountcheck) {
                alert("Already Registration this Account");
            } else {
                values.id = Date.now();
                values.balance = 0;
                setData([...data, values]);
                console.log([...data, values]);
                localStorage.setItem("regData", JSON.stringify([...data, values]));
                formik.resetForm()
                alert('User Registration Successfulluy!!')
                nevigate("/destboardpage");
            }

        }
    });

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

                    <h1 align='center' className='mt-3'>Customer Registartion Form</h1>

                    <form onSubmit={formik.handleSubmit}>
                        <div className='row'>

                            <div className='col-lg-6 col-sm-12'>
                                <div>
                                    <label className='mt-2'>Full Name</label>
                                    <input className='form-control mt-2'
                                        type="text"
                                        name="full_name"
                                        value={formik.values.full_name}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.errors.full_name && formik.touched.full_name && (
                                        <p className='red'>{formik.errors.full_name}</p>
                                    )}
                                </div>
                                <div>
                                    <label className='mt-2'>Email</label>
                                    <input className='form-control mt-2'
                                        type="email"
                                        name="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.errors.email && formik.touched.email && (
                                        <p className='red'>{formik.errors.email}</p>
                                    )}
                                </div>
                                <div>
                                    <label className='mt-2'>Password</label>
                                    <input className='form-control mt-2'
                                        type="password"
                                        name="password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.errors.password && formik.touched.password && (
                                        <p className='red'>{formik.errors.password}</p>
                                    )}
                                </div>
                                <div>
                                    <label className='mt-2'>Account No.</label>
                                    <input className='form-control mt-2'
                                        type="number"
                                        name="account"
                                        value={formik.values.account}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.errors.account && formik.touched.account && (
                                        <p className='red'>{formik.errors.account}</p>
                                    )}
                                </div>
                            </div>

                            <div className='col-lg-6 col-sm-12'>
                                <div>
                                    <label className='mt-2'>Date of Birth</label>
                                    <input className='form-control mt-2'
                                        type="date"
                                        name="dob"
                                        value={formik.values.dob}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.errors.dob && formik.touched.dob && (
                                        <p className='red'>{formik.errors.dob}</p>
                                    )}
                                </div>
                                <div>
                                    <label className='mt-2'>PAN</label>
                                    <input className='form-control mt-2'
                                        type="text"
                                        name="pan"
                                        value={formik.values.pan}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.errors.pan && formik.touched.pan && (
                                        <p className='red'>{formik.errors.pan}</p>
                                    )}
                                </div>
                                <div>
                                    <label className='mt-2'>Mobile No.</label>
                                    <input className='form-control mt-2'
                                        type="number"
                                        name="mobile"
                                        value={formik.values.mobile}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.errors.mobile && formik.touched.mobile && (
                                        <p className='red'>{formik.errors.mobile}</p>
                                    )}
                                </div>

                            </div>

                        </div>



                        <div className='mt-2 text-center '>
                            <button type="submit" className='btn btn-primary mt-2 btn-lg'>Submit</button>
                        </div>
                    </form>


                </div>
            </div>
        </>
    )
}
