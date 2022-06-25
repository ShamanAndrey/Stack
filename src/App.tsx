import React, { useState, useEffect, Children } from "react";

function App() {
  const [isInfoPage, setInfoPage] = useState(false);

  useEffect(() => {
    if (isInfoPage === false) {
    }
  }, [isInfoPage]);

  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center flex-col">
      <div className="flex justify-center items-center flex-col">
        <div
          className={
            isInfoPage ? "hidden" : "flex justify-center items-center flex-col"
          }
        >
          <h1 className="font-mono text-3xl">Welcome Back Creator!</h1>
          <button
            className="mt-10 cursor-pointer bg-blue-400 hover:bg-pink-300 p-5 rounded-md transition-all"
            onClick={() => setInfoPage(!isInfoPage)}
          >
            May we continue ?
          </button>
        </div>
        <div
          className={
            isInfoPage
              ? "flex justify-center items-center flex-col gap-5"
              : "hidden"
          }
        >
          <div className="bg-slate-200 w-[400px] p-5 rounded-md flex flex-col items-center">
            <h1 className="bg-slate-300 p-2 rounded text-xl">Front-End</h1>
            <div className="mt-2 flex flex-col items-center">
              <p>React JS</p>
              <p>Tailwind CSS</p>
              <p>Framer Motion</p>
            </div>
          </div>
          <div className="bg-slate-200 w-[400px] p-5 rounded-md flex flex-col items-center">
            <h1 className="bg-slate-300 p-2 rounded text-xl">Mid-End</h1>
            <div className="mt-2 flex flex-col items-center">
              <p>Express JS</p>
              <p>Node JS</p>
            </div>
          </div>
          <div className="bg-slate-200 w-[400px] p-5 rounded-md flex flex-col items-center">
            <h1 className="bg-slate-300 p-2 rounded text-xl">Back-End</h1>
            <div className="mt-2 flex flex-col items-center">
              <p>MongoDB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
