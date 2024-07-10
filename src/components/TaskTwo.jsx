import { useState } from "react";

function TaskTwo() {
  const [query, setQuery] = useState("");
  let [stringArr, setStringArr] = useState([]);
  let [numberArr, setNumberArr] = useState([]);
  const handleSubmit = () => {
    let str2 = "";
    query.split("").forEach((char) => {
      if (char >= "a" && char <= "z") {
        str2 += char;
      }
    });
    console.log(str2);
    if (str2.length > 0) {
      setStringArr([...stringArr, query]);
    } else {
      setNumberArr([...numberArr, query]);
    }

    setQuery("");
  };
  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Task two</h1>
      <p className="mb-4">
        Storing input textbox value into an array, displaying the separate
        Number Array and String Array Using Javascript
      </p>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Task Value
        </label>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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
          <h2 className="text-lg font-semibold">String array:</h2>
          <ul className="list-disc list-inside">
            {stringArr.map((num, index) => (
              <li key={index}>{num}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Number array:</h2>
          <ul className="list-disc list-inside">
            {numberArr.map((num, index) => (
              <li key={index}>{num}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TaskTwo;
