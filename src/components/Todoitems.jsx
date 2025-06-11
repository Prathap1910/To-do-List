import Todoitem from "./Todoitem";
const Todoitems = ({ todoitems, handleDel }) => {
  return (
    <>
      <div className="todo-items">
        {todoitems.map((item) => (
          <Todoitem
            key={item.name}
            name={item.name}
            dat={item.dat}
            handleDel={handleDel}
          ></Todoitem>
        ))}
      </div>
    </>
  );
};
export default Todoitems;
