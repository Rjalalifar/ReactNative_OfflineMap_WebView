import React from "react";
import { Formik } from "formik";

const ToplearnForm = ({
    initialValues,
    onSubmit,
    validationSchema,
    children,
}) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {() => <>{children}</>}
        </Formik>
    );
};

export default ToplearnForm;
