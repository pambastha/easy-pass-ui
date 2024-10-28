import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        // Initial state with all form fields
        selection: '',
        idValue: '',
        name: '',
        alias: '',
        dob: '',
        countryOfBirth: '',
        originOfBirth: '',
        experience: '',
        profession: '',
        email: '',
        phone: '',
        whatsapp: '',
        linkedin: '',
        companyLink: '',
        personalLink: '',
        github: '',
    });

    return (
        <FormContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormContext.Provider>
    );
};
