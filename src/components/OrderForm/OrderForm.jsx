import React from 'react'
import {Formik, Form, Field} from 'formik'

const OrderForm = () => {
  return (
    <div>
        <Formik
            initialValues={{
                name : '',
                lastName : '',
                phone : '',
                email : '',
                region : '',
                city : ''
            }}
        >
            {
                () => (
                    <Form>
                        <Field name='name'/>
                    </Form>
                )
            }
        </Formik>
    </div>
  )
}

export default OrderForm