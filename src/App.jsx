import Appname from "./components/Appname";
import Apptodo from "./components/Addtodo";
import Todoitems from "./components/Todoitems";
import "/Users/prathapkumar/projects/to-do-ver-1/src/App.jsx";
import { useState } from "react";
import Welcomemsg from "./components/Welcomemsg";
function App() {
  const initialItems = [];
  const [todoItems, settodoItems] = useState(initialItems);

  const handlenewItem = (item, ddate) => {
    let nt = [...todoItems, { name: item, dat: ddate }];
    settodoItems(nt);
  };
  const handleDel = (newitem) => {
    let newArr = todoItems.filter((item) => item.name !== newitem);
    settodoItems(newArr);
  };
  return (
    <center className="todo-container">
      <Appname />
      <Apptodo onNew={handlenewItem} />
      <Welcomemsg len={todoItems.length}></Welcomemsg>
      <Todoitems todoitems={todoItems} handleDel={handleDel}></Todoitems>
    </center>
  );
}

export default App;
