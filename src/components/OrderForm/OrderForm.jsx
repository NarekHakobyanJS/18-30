import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup';
import './OrderForm.css'


const region = ["Yerevan", "Syunik", "Lori", "Armavir"]
const OrderForm = ({allPrice, ModalOpen, orderFormApp}) => {

    const orderForm = (values) => {
        orderFormApp(values)
        ModalOpen()
    }
    const validateOrder = yup.object().shape({
        name : yup.string().required('field is requreid').matches(/[A-Z]{1}[a-z]/, 'anune chi ham@nkum'),
        lastName : yup.string().required('field is requreid').matches(/[A-Z]{1}[a-z]/, 'azganune chi ham@nkum'),
        phone : yup.string().required('field is requreid').matches(/[+][374]+-\d+-\d+-\d+-\d/g, 'hamare sxale'),
        email : yup.string().required('field is requreid').email('email no valid'),
        region : yup.string().required('field is requreid'),
        city : yup.string().required('field is requreid').matches(/[A-Z]{1}[a-z]/, 'anune chi ham@nkum'),
        address : yup.string().required('field is requreid'),
    })
  return (
    <div>
         <h2>totalPrice : {allPrice}</h2>
        <Formik
            initialValues={{
                name : '',
                lastName : '',
                phone : '',
                email : '',
                region : '',
                city : '',
                address : '',
            }}
            validationSchema={validateOrder}
            onSubmit={(values) => orderForm(values)}
        >
            {
                () => (
                    <div className='orederForm'>
                    <Form> 
                        <Field name='name' placeholder='name'/>
                        <ErrorMessage name='name' component='h5'/>
                        <Field name='lastName' placeholder='lastName'/>
                        <ErrorMessage name='lastName' component='h5'/>
                        <Field name='phone' placeholder='phone'/>
                        <ErrorMessage name='phone' component='h5'/>
                        <Field name='email' placeholder='email'/>
                        <ErrorMessage name='email' component='h5'/>
                        <Field name='region' as='select'>
                            {
                                region.map((reg) => <option key={reg}>{reg}</option>)
                            }
                        </Field>
                        <ErrorMessage name='region' component='h5'/>
                        <Field name='city' placeholder='city'/>
                        <ErrorMessage name='city' component='h5'/>
                        <Field name='address' placeholder='address'/>
                        <ErrorMessage name='address' component='h5'/>
                        <button type='submit'>send</button>
                    </Form>
                    </div>
                )
            }
        </Formik>
    </div>
  )
}

export default OrderForm