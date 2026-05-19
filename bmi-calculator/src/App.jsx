import { useState } from "react"
import './App.css'

function App() {

  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

  function bmiCalculator(e){
    e.preventDefault();
    if(weight <= 0 || height <= 0 || !height || !weight){
      alert("Please enter a valid weight and height")
    }
    else{
      let calculatedBmi = weight / (height * height)
      setBmi(calculatedBmi.toFixed(1))

      if(calculatedBmi < 18.5){
        setMessage("You are underweight")
      }
      else if(calculatedBmi >= 18.5 && calculatedBmi < 25){
        setMessage("You are healthy")
      }
      else{
        setMessage("You are overweight")
      }
    }
  }

  function reload(){
  setWeight('')
  setHeight('')
  setBmi('')
  setMessage('')
}
  return (
    <div className="container">
  <h2 className="title">BMI Calculator</h2>

  <form onSubmit={bmiCalculator}>
    
    <div className="input-group">
      <label className="label">Weight (kg)</label>

      <input
        className="input"
        type="number"
        placeholder="Enter Weight value"
        value={weight}
        onChange={(e) => {
          setWeight(e.target.value)
        }}
      />
    </div>

    <div className="input-group">
      <label className="label">Height (m)</label>

      <input
        className="input"
        type="number"
        placeholder="Enter Height value"
        value={height}
        onChange={(e) => {
          setHeight(e.target.value)
        }}
      />
    </div>

    <div className="btn-group">
      <button className="btn" type="submit">
        Submit
      </button>

      <button
        className="btn reload-btn"
        type="button"
        onClick={reload}
      >
        Reload
      </button>
    </div>

    <div className="center">
      <h3 className="bmi-result">
        Your BMI is : {bmi}
      </h3>

      <p className="message">{message}</p>
    </div>

  </form>
</div>
  )
}

export default App
