import React from 'react'
import style from './Login.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from "yup"
import { useNavigate } from 'react-router-dom'


const Login = ({users}) => {
    const navigate = useNavigate();

    const validateLogin = yup.object().shape({
        login : yup.string().required('filed is requred '),
        password : yup.string().required('filed is requred ')
    })

    const AuthorizationUser = (values) => {
        let user = users.find((elem) => elem.login === values.login && elem.password === values.password)

        if(user) {
            return navigate('/profile', {state : user})
        }else {
            return navigate('/register')
        }

       // console.log(user);
    }
    return (
        <div className={style.login}>
            <h2>Login</h2>
            <Formik
                initialValues={{
                    login : '',
                    password : ''
                }}
                onSubmit={(values) => AuthorizationUser(values)}
                validationSchema={validateLogin}
            >
                {
                    () => (
                        <Form>
                            <Field name='login' placeholder='login'/>
                            <ErrorMessage name='login'/>
                            <Field name='password' placeholder='password'/>
                            <ErrorMessage name='password'/>
                            <button type='submit'>login</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default Login