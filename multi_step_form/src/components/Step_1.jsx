import React from 'react';

const Step_1 = () => {
  return (
    <div className="step">
    <h2>Step 1</h2>
    <input
      type="text"
      name="field1"
      value={formData.field1}
      onChange={handleFieldChange}
      placeholder="Field 1"
    />
  </div>
  );
};

export default Step_1;