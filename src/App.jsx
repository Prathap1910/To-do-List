import Appname from "./components/Appname";
import Apptodo from "./components/Addtodo";
import Todoitems from "./components/Todoitems";
import "/Users/prathapkumar/projects/to-do-ver-1/src/App.jsx";
import { useState } from "react";
import Welcomemsg from "./components/Welcomemsg";
import { TodoItemsContext } from "./store/Item_store";
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
    <TodoItemsContext.Provider
      value={{ todoItems: todoItems, addNew: handlenewItem, del: handleDel }}
    >
      <center className="todo-container">
        <Appname />
        <Apptodo />
        <Welcomemsg></Welcomemsg>
        <Todoitems></Todoitems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
