import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { TodoItemsContext } from "../store/Item_store";
function Todoitem({ name, dat }) {
  const { del } = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{name}</div>
        <div className="col-4">{dat}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => {
              del(name);
            }}
          >
            <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todoitem;
