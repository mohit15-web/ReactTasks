import { useEffect, useState } from "react";

function TaskThree() {
  const [query, setQuery] = useState(0);
  let [soldPriceList, setSoldPriceList] = useState([]);
  let [totalSoldPrice, setTotalSoldPrice] = useState(0);
  let [totalProfit, setTotalProfit] = useState(0);
  const handleSubmit = () => {
    if(query === 0) {
      alert("Please enter something");
      return
    }
   setSoldPriceList([...soldPriceList , query])
    setQuery("");
  };

  useEffect(() => {
    let total = soldPriceList.reduce((acc,curr) => {
        acc += parseInt(curr)
        return acc
    },0)
    setTotalSoldPrice(total)


    
    let total2 = soldPriceList.reduce((acc,curr) => {
        console.log(typeof curr);
        acc = acc + (curr - 100)
        return acc
    },0)
    setTotalProfit(total2)

  },[soldPriceList])
  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Task Three</h1>
      <p className="mb-4">
      Storing input textbox value into an array, displaying that array list, then calculating total sale price & total profit using Javascript
      </p>
      <h2>Product original price : 100</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Sale Price
        </label>
        <input
          type="number"
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
          <h2 className="text-lg font-semibold">Sold Price List:</h2>
          <ul className="list-disc list-inside">
            {soldPriceList.map((num, index) => (
              <li key={index}>{num}</li>
            ))}
          </ul>
        </div>
        <h1>Total Sold Price : {totalSoldPrice}</h1>
        <h1>Total Profit : {totalProfit}</h1>
      </div>
    </div>
  );
}

export default TaskThree;
