import styles from "./Welcomemsg.module.css";
const Welcomemsg = ({ len }) => {
  if (len === 0) return <p className={styles.Para}>Enjoy your day</p>;
};
export default Welcomemsg;
