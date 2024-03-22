import React, { useEffect, useState } from 'react'
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';

export default function ManagerUserdata() {

    const [login, setLogin] = useState([])
    const Navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('regData')) {
            setLogin(JSON.parse(localStorage.getItem('regData')))
        }
    }, [])

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email format")
                .required("Required!"),
            password: Yup.string()
                .min(3, "Minimum 3 characters")
                .required("Required!")
        }),
        onSubmit: values => {
            let isAuthenticated = false;
            for (let i = 0; i < login.length; i++) {
                if (values.email === login[i].email && values.password === login[i].password) {
                    isAuthenticated = true;
                    localStorage.setItem('userid', login[i].id);
                    break;// Exit loop once authenticated
                }
            }

            if (isAuthenticated) {
                alert('Login Successfully!!!');
                Navigate("/accountholder")
            } else {
                alert('Something Went to wrong!!!')

            }
        }
    })
    return (
        <>

            <div className="Auth-form-container">
                <form onSubmit={formik.handleSubmit} className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">User Login</h3>
                        <div className='form-group mt-3'>
                            <label >Email</label>
                            <input className="form-control mt-1"
                                type="email"
                                name="email"
                                placeholder="Enter email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.email && formik.touched.email && (
                                <p className='red'>{formik.errors.email}</p>
                            )}
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input className="form-control mt-1"
                                placeholder="Enter password"
                                type="password"
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.password && formik.touched.password && (
                                <p className='red'>{formik.errors.password}</p>
                            )}
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className='btn btn-primary mt-2'>Submit</button>
                        </div>
                    </div>







                </form>
            </div>

        </>
    )
}
