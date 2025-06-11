import { useRef } from "react";
import { MdOutlineAddCard } from "react-icons/md";
function Apptodo({ onNew }) {
  let refName = useRef();
  let refDate = useRef();

  const buttonClick = (event) => {
    event.preventDefault();
    let newName = refName.current.value;
    let newDate = refDate.current.value;
    onNew(newName, newDate);
    refName.current.value = "";
    refDate.current.value = "";
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={buttonClick}>
        <div className="col-6">
          <input type="text" placeholder="Enter to-do" ref={refName}></input>
        </div>
        <div className="col-4">
          <input type="date" ref={refDate}></input>
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button">
            <MdOutlineAddCard />
          </button>
        </div>
      </form>
    </div>
  );
}
export default Apptodo;
