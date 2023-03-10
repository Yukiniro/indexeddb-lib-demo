import localforage from "localforage";
import { useCallback } from "react";
import Button from "./Button";

function App() {
  const handleClick1 = useCallback(() => {
    const timestamp = Date.now().toString();
    const ins = localforage.createInstance({
      name: "localforagedemo",
      storeName: "store1",
      version: 1,
    });
    ins
      .setItem(timestamp, timestamp)
      .then(() => console.log("Store Success"))
      .catch(e => console.log(e));
  }, []);

  const handleClick2 = useCallback(() => {
    const timestamp = Date.now().toString();
    const ins = localforage.createInstance({
      name: "localforagedemo",
      storeName: "store2",
      version: 1,
    });
    ins
      .setItem(timestamp, timestamp)
      .then(() => console.log("Store Success"))
      .catch(e => console.log(e));
  }, []);

  const handleClick3 = useCallback(() => {
    const timestamp = Date.now();
    const ins = localforage.createInstance({
      name: "localforagedemo",
      storeName: "store1",
      version: 1,
    });

    const promiseList = [];
    for (let i = 0; i < 500; i++) {
      promiseList.push(ins.setItem(`${timestamp}-${i}`, timestamp));
    }

    Promise.all(promiseList)
      .then(() => console.log("Store Success"))
      .catch(e => console.log(e));
  }, []);

  return (
    <div className="w-screen h-screen bg-gray-800 text-center flex flex-col items-center justify-center">
      <h1 className="text-white text-20 font-mono font-600">
        localforage demo
      </h1>
      <Button onClick={handleClick1}>Store 1</Button>
      <Button onClick={handleClick2}>Store 2</Button>
      <Button onClick={handleClick3}>Store 1 multi</Button>
    </div>
  );
}

export default App;
