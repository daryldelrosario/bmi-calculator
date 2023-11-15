import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const bmiValue = (weight / (height * height)).toFixed(2);
      setBMI(bmiValue);
    }
  };

  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <div className="calculator">
        <label>
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
        <label>
          Height (m):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
        <button onClick={calculateBMI}>Calculate BMI</button>
        {bmi && <p>Your BMI is: {bmi}</p>}
      </div>
    </div>
  );
}

export default App;
