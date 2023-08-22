import React, { useState } from 'react';
import Step_1 from './components/Step_1';
import Step_2 from './components/Step_2';
import Step_3 from './components/Step_3';
import Summary from './components/Summary';

const App = () => {
  return (
    <div className="App">
      <h1>Frontend Multi-Step Form</h1>
      <div className="form-container">
        {renderStep()}
        <div className="button-container">
          {currentStep > 1 && (
            <button onClick={handlePrevious}>Previous</button>
          )}
          {currentStep < 4 && (
            <button onClick={handleNext}>Next</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;