import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../FormContext';

function Preview() {
    const { formData } = useContext(FormContext);
    const navigate = useNavigate();

    const [agreed, setAgreed] = React.useState(false);

    const handleContinue = () => {
        if (agreed) {
            navigate('/payment');
        } else {
            alert('Please agree that the above information is correct.');
        }
    };

    // Helper function to format field names
    function formatFieldName(fieldName) {
        return fieldName
            .replace(/([A-Z])/g, ' $1') // Add space before capital letters
            .replace(/_/g, ' ') // Replace underscores with spaces
            .replace(/^./, function (str) {
                return str.toUpperCase();
            }); // Capitalize first letter
    }

    // Filter out empty values for optional fields
    const filteredData = Object.entries(formData).filter(
        ([key, value]) => value !== '' && value !== 'N/A'
    );

    return (
        <div className="container">
            <h1>Preview</h1>
            <div>
                <h3>Complete Application Details for below</h3>
                <table className="summary-table">
                    <tbody>
                    {filteredData.map(([key, value]) => (
                        <tr key={key}>
                            <td className="field-name">{formatFieldName(key)}</td>
                            <td className="field-value">{value}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                    />
                    I agree that the above values are correct.
                </label>
            </div>
            <div className="button-group">
                <button type="button" onClick={() => navigate(-1)}>
                    Back
                </button>
                <button onClick={handleContinue} disabled={!agreed}>
                    Continue
                </button>
            </div>
        </div>
    );
}

export default Preview;
