import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../FormContext';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Application() {
    const { formData, setFormData } = useContext(FormContext);
    const navigate = useNavigate();

    // Validation Schema
    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        alias: Yup.string().required('Required'),
        dob: Yup.date().required('Required'),
        countryOfBirth: Yup.string().required('Required'),
        originOfBirth: Yup.string().required('Required'),
        experience: Yup.number()
            .required('Required')
            .min(0, 'Experience cannot be negative'),
        profession: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        phone: Yup.string().required('Required'),
    });

    const handleSubmit = (values) => {
        setFormData({
            ...formData,
            ...values,
        });
        navigate('/preview');
    };
    return (
        <div className="container">
            <h1>Application</h1>
            <Formik
                initialValues={{
                    // Use existing formData or default values
                    name: formData.name || '',
                    alias: formData.alias || '',
                    dob: formData.dob || '',
                    countryOfBirth: formData.countryOfBirth || '',
                    originOfBirth: formData.originOfBirth || '',
                    experience: formData.experience || '',
                    profession: formData.profession || '',
                    email: formData.email || '',
                    phone: formData.phone || '',
                    whatsapp: formData.whatsapp || '',
                    linkedin: formData.linkedin || '',
                    companyLink: formData.companyLink || '',
                    personalLink: formData.personalLink || '',
                    github: formData.github || '',
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ values }) => (
                    <Form>
                        <details open>
                            <summary>Personal Information</summary>
                            <div className="field-group">
                                <label>Name:</label>
                                <Field name="name" required/>
                            </div>
                            <div className="field-group">
                                <label>Alias:</label>
                                <Field name="alias" required/>
                            </div>
                            <div className="field-group">
                                <label>Date of Birth:</label>
                                <Field name="dob" type="date" required/>
                            </div>
                            <div className="field-group">
                                <label>Country of Birth:</label>
                                <Field name="countryOfBirth" required/>
                            </div>
                            <div className="field-group">
                                <label>Origin of Birth:</label>
                                <Field name="originOfBirth" required/>
                            </div>
                            <div className="field-group">
                                <label>Number of Experience:</label>
                                <Field name="experience" type="number" required/>
                            </div>
                            <div className="field-group">
                                <label>Relevant Profession:</label>
                                <Field name="profession" required/>
                            </div>
                            <div className="field-group">
                                <label>Email ID:</label>
                                <Field name="email" type="email" required/>
                            </div>
                            <div className="field-group">
                                <label>Phone Number:</label>
                                <Field name="phone" required/>
                            </div>
                            <td></td>

                        </details>
                        <details>
                        <summary>Additional Information</summary>
                            <div className="field-group">
                            <label>WhatsApp Number:</label>
                                <Field name="whatsapp"/>
                            </div>
                            <div className="field-group">
                                <label>LinkedIn Link:</label>
                                <Field name="linkedin"/>
                            </div>
                            <div className="field-group">
                                <label>Company Link:</label>
                                <Field name="companyLink"/>
                            </div>
                            <div className="field-group">
                                <label>Personal Domain Link:</label>
                                <Field name="personalLink"/>
                            </div>
                            <div className="field-group">
                                <label>GitHub Link:</label>
                                <Field name="github"/>
                            </div>
                        </details>
                        <div className="button-group">
                            <button
                                type="button"
                                className="back-button"
                                onClick={() => navigate(-1)}
                            >
                                Back
                            </button>
                            <button type="submit" className="continue-button">
                                Continue
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Application;
