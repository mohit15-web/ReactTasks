import { useEffect, useState } from "react";

function FetchTask() {
  const [data, setData] = useState([]);
  const [start, setStart] = useState(0);
  let fetchData = async (count = 10, start = 0) => {
    console.log("inside fetch", count);
    try {
      let res = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_start=${start}&_limit=${count}`
      );
      let jsonData = await res.json();

      let set = new Set();
      let uniqueArr = [];
      for (let curr of jsonData) {
        if (!set.has(curr.title)) {
          set.add(curr.title);
          uniqueArr.push(curr);
        }
      }
      setData(uniqueArr);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData(10, start);
  }, [start]);

  let toggleCheckbox = (id) => {
    let updatedArr = data.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setData(updatedArr);
  };
  return (
    <div className="p-10 w-[70%] m-auto">
      <h1 className="text-3xl text-center mt-10">list data</h1>
      <ul className="mb-8 px-10 shadow-lg py-4 ">
        {data.map((item) => (
          <li className="p-6 shadow-xl rounded-lg" key={item.id}>
            ( {item.id} ){" "}
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleCheckbox(item.id)}
            />{" "}
            {item.title}{" "}
          </li>
        ))}
      </ul>
      <div className="flex justify-between">
        <button
          className={`px-6 py-2 border mx-4 rounded-md font-semibold disabled:bg-slate-300
        `}
          disabled={start === 0}
          onClick={() => {
            setStart(start - 10);
          }}
        >
          Prev
        </button>
        <button
          className="px-6 py-2 border mx-4 rounded-md font-semibold"
          onClick={() => {
            setStart(start + 10);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default FetchTask;
