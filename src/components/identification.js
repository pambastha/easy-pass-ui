import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../FormContext';

function Identification() {
    const { formData, setFormData } = useContext(FormContext);
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/application');
    };

    const isNextDisabled = () => {
        if (formData.selection === 'Foreigner') {
            return false; // No ID required
        }
        return formData.idValue.trim() === '';
    };

    const handleSelectionChange = (e) => {
        const selection = e.target.value;
        setFormData({
            ...formData,
            selection,
            idValue: '', // Reset ID value when selection changes
        });
    };

    const handleIdChange = (e) => {
        setFormData({
            ...formData,
            idValue: e.target.value,
        });
    };

    return (
        <div className="container">
            <h1>Identification</h1>
            <div className="form-section">
                <h2>Select Option:</h2>
                <div className="radio-group">
                    <label className="radio-option">
                        <input
                            type="radio"
                            value="Citizen"
                            checked={formData.selection === 'Citizen'}
                            onChange={handleSelectionChange}
                        />
                        Citizen
                    </label>
                    <label className="radio-option">
                        <input
                            type="radio"
                            value="PR"
                            checked={formData.selection === 'PR'}
                            onChange={handleSelectionChange}
                        />
                        PR
                    </label>
                    <label className="radio-option">
                        <input
                            type="radio"
                            value="Foreigner"
                            checked={formData.selection === 'Foreigner'}
                            onChange={handleSelectionChange}
                        />
                        Foreigner
                    </label>
                </div>
            </div>
            <div className="form-section">
                {formData.selection === 'Citizen' && (
                    <div className="field-group">
                        <label>National Citizen ID:</label>
                        <input
                            type="text"
                            value={formData.idValue}
                            onChange={handleIdChange}
                        />
                    </div>
                )}
                {formData.selection === 'PR' && (
                    <div className="field-group">
                        <label>Permanent Residency ID:</label>
                        <input
                            type="text"
                            value={formData.idValue}
                            onChange={handleIdChange}
                        />
                    </div>
                )}
                {formData.selection === 'Foreigner' && (
                    <p>
                        Foreigner is selected, so no Citizen or PR ID is required. Make sure
                        to select correctly as it may restrict the options and benefits on
                        other pages.
                    </p>
                )}
            </div>
            <div className="button-group">
                <button
                    onClick={handleNext}
                    disabled={formData.selection === '' || isNextDisabled()}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Identification;
