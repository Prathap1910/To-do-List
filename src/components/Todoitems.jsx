import { useContext } from "react";
import Todoitem from "./Todoitem";
import { TodoItemsContext } from "../store/Item_store";
const Todoitems = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <>
      <div className="todo-items">
        {todoItems.map((item) => (
          <Todoitem key={item.name} name={item.name} dat={item.dat}></Todoitem>
        ))}
      </div>
    </>
  );
};
export default Todoitems;
