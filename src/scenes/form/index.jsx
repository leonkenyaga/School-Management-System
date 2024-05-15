import React from "react";
import {Box, Button, TextField} from "@mui/material";
import {Formik} from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    grade: "",
    status: "",
    admissionnumber: "",
    guardian: "",
    county: "",
    admissiondate: "",
    gender:""
};

//const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


const userSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    //contact: yup.string().matches(phoneRegExp, "Phone number is not valid").required("required"),
    grade: yup.string().required("required"),
    status: yup.string().required("required"),
    admissionnumber: yup.string().required("required"),
    guardian: yup.string().required("required"),
    county: yup.string().required("required"),
    admissiondate: yup.string().required("required"),
    gender: yup.string().required("required"),
});

const Form = () => {
    const isNonMobile =  useMediaQuery("(min-width: 600px)");
    const handleFormSubmit = (values) => {
        console.log(values)
    }
    return(
    <Box m="20px">
        <Header title="ADD STUDENT" subtitle="Create a New Student Profile "></Header>
        <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
        >
            {({
                values,
                errors, 
                touched, 
                handleBlur, 
                handleChange, 
                handleSubmit,
            }) => (
                <form onSubmit={handleSubmit}>
                    <Box 
                    display="grid" 
                    gap="30px" 
                    gridTemplateColumns="repeat(4,minmax(0,1fr))"
                    sx={{
                        "& > div": {gridColumn: isNonMobile ? undefined : "span 4" },
                    }}
                    >
                        <TextField 
                        fullWidth
                        variant="filled"
                        type="text"
                        label="First Name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.firstName}
                        name="firstName"
                        error={!!touched.firstName && !!errors.firstName}
                        helperText={touched.firstName && errors.firstName}
                        sx={{gridColumn: "span 2"}}

                        />
                        <TextField 
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Last Name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.lastName}
                        name="lastName"
                        error={!!touched.lastName && !!errors.lastName}
                        helperText={touched.lastName && errors.lastName}
                        sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                        name="email"
                        error={!!touched.email && !!errors.email}
                        helperText={touched.email && errors.email}
                        sx={{ gridColumn: "span 4" }}
                        />
                        <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Grade"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.grade}
                        name="grade"
                        error={!!touched.grade && !!errors.grade}
                        helperText={touched.grade && errors.grade}
                        sx={{ gridColumn: "span 4" }}
                        />
                        <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Status"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.status}
                        name="status"
                        error={!!touched.status && !!errors.status}
                        helperText={touched.status && errors.status}
                        sx={{ gridColumn: "span 4" }}
                        />
                        <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Admission Number"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.admissionnumber}
                        name="admissionnumber"
                        error={!!touched.admissionnumber && !!errors.admissionnumber}
                        helperText={touched.admissionnumber && errors.admissionnumber}
                        sx={{ gridColumn: "span 4" }}
                        />
                                                <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Guardian"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.guardian}
                        name="guardian"
                        error={!!touched.guardian && !!errors.guardian}
                        helperText={touched.guardian && errors.guardian}
                        sx={{ gridColumn: "span 4" }}
                        />
                                                <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="County"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.county}
                        name="county"
                        error={!!touched.county && !!errors.county}
                        helperText={touched.county && errors.county}
                        sx={{ gridColumn: "span 4" }}
                        />
                                                <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Admission Date"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.admissiondate}
                        name="admissiondate"
                        error={!!touched.admissiondate && !!errors.admissiondate}
                        helperText={touched.admissiondate && errors.admissiondate}
                        sx={{ gridColumn: "span 4" }}
                        />
                                         <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Gender"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.gender}
                        name="gender"
                        error={!!touched.gender && !!errors.gender}
                        helperText={touched.gender && errors.gender}
                        sx={{ gridColumn: "span 4" }}
                        />
                    </Box>
                    <Box display="flex" justifyContent="end" mt="20px">
                        <Button type="submit" color="secondary" variant="contained">
                            Add New Student
                        </Button>
                    </Box>

                </form>
            )}
        </Formik>

    </Box>);
};

export default Form;