import React from 'react'

const Step_2 = () => {
  return (
    <div className="step">
    <h2>Step 2</h2>
    <input
      type="text"
      name="field2"
      value={formData.field2}
      onChange={handleFieldChange}
      placeholder="Field 2"
    />
  </div>
  )
}

export default Step_2