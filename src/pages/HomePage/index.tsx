import { getDay, getFormattedDate } from "../../utils/date";
import { Todo } from "./components";
import useHomePage from "./hooks/useHomePage";
import * as styles from "./style.css";

const HomePage = () => {
  const {
    todos,
    inputRef,
    inCompleteTodoCount,
    handleSubmit,
    handleClickCheck,
    handleClickDelete,
  } = useHomePage();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{getFormattedDate(new Date())}</h1>
      <h2 className={styles.subTitle}>{getDay(new Date())}요일</h2>
      <h3 className={styles.description}>할 일 {inCompleteTodoCount}개 남음</h3>
      <hr />

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          ref={inputRef}
          placeholder="할 일을 작성하세요."
        />
        <button className={styles.button} type="submit">
          추가하기
        </button>
      </form>

      <ul className={styles.ul}>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Todo
              text={todo.text}
              isChecked={todo.checked}
              handleClickCheck={handleClickCheck(todo.id)}
              handleClickDelete={handleClickDelete(todo.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
