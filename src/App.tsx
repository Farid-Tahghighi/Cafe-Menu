import { useState } from "react";
import Menu from "./components/Menu";
import Sidebar from "./components/Sidebar";
import items from "./data/Items";
import types from "./data/Types";

function App() {
  const [category, setCategory] = useState("Coffee");
  return (
    <div className="flex flex-row h-svh">
      <Menu
        types={types
          .filter((t) => t.category === category)
          .map((i) => i.type)}
        items={items.filter((i) => i.category === category)}
      ></Menu>
      <Sidebar setCategory={(c) => setCategory(c)}></Sidebar>
    </div>
  );
}

export default App;




