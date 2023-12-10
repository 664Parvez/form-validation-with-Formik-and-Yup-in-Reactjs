import React from 'react'

import {useFormik} from "formik"

import { signupSchema } from '../schemas'

const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const Signup = () => {

    const Formik = useFormik({
        initialValues: initialValues,

        validationSchema: signupSchema,

        onSubmit: (values, action) => {
            console.log(values)

            action.resetForm()
        }
    })

  return (
    <div>
        <h2 className='text-center mt-5'>Sign Up</h2>

        <div className="container">
            <form action="" onSubmit={Formik.handleSubmit}>
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    name='name' 
                    className='form-control' 
                    placeholder='Username' 
                    id='username'
                    value={Formik.values.name} 
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur}
                />
                {Formik.errors.name && Formik.touched.name ? <p style={{color: "red", marginBottom: 0}}>{Formik.errors.name}</p> : null}

                <label htmlFor="email" className='mt-4'>Email</label>
                <input 
                    type="email" 
                    name='email' 
                    className='form-control' 
                    placeholder='Email' 
                    id='email'
                    value={Formik.values.email} 
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur}
                />
                {Formik.errors.email && Formik.touched.email ? <p style={{color: "red", marginBottom: 0}}>{Formik.errors.email}</p> : null}

                <label htmlFor="password" className='mt-4'>Password</label>
                <input 
                    type="password" 
                    name='password' 
                    className='form-control' 
                    placeholder='Password' 
                    id='password'
                    value={Formik.values.password}
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur} 
                />
                {Formik.errors.password && Formik.touched.password ? <p style={{color: "red", marginBottom: 0}}>{Formik.errors.password}</p> : null}

                <label htmlFor="confirmPassword" className='mt-4'>Confirm Password</label>
                <input 
                    type="password" 
                    name='confirmPassword' 
                    className='form-control' 
                    placeholder='Confirm Password' 
                    id='confirmPassword'
                    value={Formik.values.confirmPassword} 
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur}
                />
                {Formik.errors.confirmPassword && Formik.touched.confirmPassword ? <p style={{color: "red", marginBottom: 0}}>{Formik.errors.confirmPassword}</p> : null}

                <button type='submit' className='btn btn-primary mt-5'>Signup</button>
            </form>
        </div>
    </div>
  )
}

export default Signup