import * as styles from "./styles.css";

type Props = {
  text: string;
  isChecked: boolean;
  handleClickCheck: () => void;
  handleClickDelete: () => void;
};

const Todo = (props: Props) => {
  const { text, isChecked, handleClickCheck, handleClickDelete } = props;

  return (
    <div className={styles.container}>
      <span className={isChecked ? styles.checked : ""}>{text}</span>
      <div>
        <button type="button" onClick={handleClickCheck}>
          ✅
        </button>
        <button type="button" onClick={handleClickDelete}>
          🗑️
        </button>
      </div>
    </div>
  );
};

export default Todo;
