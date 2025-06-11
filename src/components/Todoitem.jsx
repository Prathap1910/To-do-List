import { AiFillDelete } from "react-icons/ai";
function Todoitem({ name, dat, handleDel }) {
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
              handleDel(name);
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
