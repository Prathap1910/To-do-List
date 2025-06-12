import styles from "./Welcomemsg.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "/Users/prathapkumar/projects/Context_Api/src/store/Item_store.jsx";
const Welcomemsg = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    todoItems.length === 0 && <p className={styles.Para}>Enjoy your day</p>
  );
};
export default Welcomemsg;
