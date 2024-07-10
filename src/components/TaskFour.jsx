import { useEffect, useState } from "react";

function TaskFour() {
    const[productArr,setProductArr] = useState([])
    const[total,setTotal] = useState(0)
    const[name,setName] = useState('')
    const[price,setPrice] = useState(0)
    const handleSubmit = () => {
        
        setProductArr(
            [...productArr ,{id:Date.now(),title:name,price:parseInt(price)}]
        )
        setName("")
        setPrice("")
    }

    useEffect(() => {
        let total2 = productArr.reduce((acc,curr) => {
            acc += curr.price
            return acc
        },0)
        setTotal(total2)
    },[productArr])

  return (
    <div  className="p-4 max-w-md mx-auto flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Task Four</h1>
      <p>
        Storing the input data with Product Name and Product Price as an object
        into array, displaying that list data, calculating total Product Price
        using javascript.
      </p>
      <div>
        <label htmlFor="">Product name</label>
        <input
          type="text"
          className="block w-full p-2 border border-gray-300 rounded-md"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">Product Price</label>
        <input
          type="number"
          className="block w-full p-2 border border-gray-300 rounded-md"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md"
      onClick={handleSubmit}
      >
        Submit
      </button>
      <div className="mt-4">
          <h2 className="text-lg font-semibold">Products:</h2>
          <ul className="list-disc list-inside">
            {productArr.map((num, index) => (
              <li key={index}>{num.title}</li>
            ))}
          </ul>
        </div>
        <h1>total : {total} </h1>
    </div>
  );
}

export default TaskFour;
