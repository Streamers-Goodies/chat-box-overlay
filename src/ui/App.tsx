import { useState } from "react";

const App = () => {
  const [userId, setUserId] = useState("");

  const handleSubmit = () => {
    const { ipcRenderer } = window.require("electron");
    ipcRenderer.send("set-user-id", userId);
  };

  return (
    <main className="font-geist p-4 grid place-items-center h-screen bg-black text-white">
      <div className="flex flex-col gap-2 items-center">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
            Chat Box ID
          </label>
          <input
            className="outline-2 outline-zinc-500 focus:outline-white outline-dashed p-2 rounded-md"
            aria-label="Chat Box ID"
            type="text"
            id="user-id"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <button
          className="transition-transform active:scale-95 cursor-pointer text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </main>
  );
};

export default App;
