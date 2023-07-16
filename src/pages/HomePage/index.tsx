import { getDay, getFormattedDate } from "../../utils/date";
import { Todo } from "./components";
import useHomePage from "./hooks/useHomePage";

const HomePage = () => {
  const { todos, inputRef, handleSubmit, handleClickCheck, handleClickDelete } =
    useHomePage();

  console.log("todos", todos);

  return (
    <div>
      <h1>{getFormattedDate(new Date())}</h1>
      <h2>{getDay(new Date())}요일</h2>
      <h3>할 일 {todos.length}개 남음</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} placeholder="할 일을 작성하세요." />
        <button type="submit">추가하기</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Todo
              text={todo.text}
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
