import React from 'react'
import { Formik } from 'formik'

export default function ({initialValues, onSubmit, validationSchema, children}) {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {() => (
                <>
                    {children}
                </>
            )}
        </Formik>
    )
}

