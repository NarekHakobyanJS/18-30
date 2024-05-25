import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = ({createNewUser}) => {
    const navigate = useNavigate()

    const validateRegister = yup.object().shape({
        login: yup.string().required('filed is requred '),
        password: yup.string().required('filed is requred '),
        name : yup.string().required('filed is requred ').matches(/^[A-Z]{1}/, 'Anune Sxale'),
        role : yup.string().required('filed is requred ')
    })

    const createUser = (values) => {
        let validUser = {
            id : Date.now(),
            ...values
        }

        createNewUser(validUser)

        return navigate('/profile', {state : validUser})
    }
    return (
        <div>
            <h2>Register</h2>
            <Formik
                initialValues={{
                    name: '',
                    password: '',
                    login: '',
                    role: ''
                }}
                validationSchema={validateRegister}
                onSubmit={(values) => createUser(values)}
            >
                {
                    <Form>
                        <Field name='name' placeholder='name' />
                        <ErrorMessage name='name' />
                        <Field name='password' placeholder='password' />
                        <ErrorMessage name='password' />
                        <Field name='login' placeholder='login' />
                        <ErrorMessage name='login' />
                        <label>
                            <Field type="radio" name="role" value="admin" />
                            admin
                        </label>
                        <label>
                            <Field type="radio" name="role" value="user" />
                            user
                        </label>
                        <ErrorMessage name='role' />
                        <button type='submit'>login</button>
                    </Form>
                }
            </Formik>
        </div>
    )
}

export default Register