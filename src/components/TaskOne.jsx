import { useState } from "react";

function TaskOne() {
  const [number, setNumber] = useState("");
  let [oddArr,setOddArr] = useState([])
  let [evenArr,setEvenArr] = useState([])
  const handleSubmit = () => {
    if(number === "") {
      alert("Please enter a number");
      return
    }
    let num = parseInt(number)
    console.log(num , "number after parse")
    if(num%2 === 0){
        setEvenArr([...evenArr , num])
    }else{
        setOddArr([...oddArr,num])
    }

    setNumber("")
  }
 return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Task One</h1>
      <p className="mb-4">
        Storing input textbox value into an array, displaying the separate Even
        Array and Odd Array using JavaScript
      </p>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Task Value
        </label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Submit
      </button>
      <div className="mt-6">
        <h1 className="text-xl font-bold mb-2">Output Result</h1>
        <div>
          <h2 className="text-lg font-semibold">Even Numbers:</h2>
          <ul className="list-disc list-inside">
            {evenArr.map((num, index) => (
              <li key={index}>{num}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Odd Numbers:</h2>
          <ul className="list-disc list-inside">
            {oddArr.map((num, index) => (
              <li key={index}>{num}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}



export default TaskOne;
