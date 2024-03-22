import React from 'react';
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';


export default function ManagerLogin() {

    const Navigate = useNavigate()




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
            console.log(values)
            if (values.email == 'ahirhardik@gmail.com' && values.password == '87654321') {
                alert('Login Successfully!!!')
                Navigate('/DestBoardPage')
            } else {
                alert('Something went Wrong!!!')
            }
        }
    })
    return (
        <>
            <div className="Auth-form-container">
                <form onSubmit={formik.handleSubmit} className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Admin Login</h3>
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