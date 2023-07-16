import { useRef, useState } from "react";
import { getUniqueKey } from "../../../utils/key";

type Todo = {
  id: number;
  text: string;
  checked: boolean;
};

const useHomePage = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "test1", checked: false },
    { id: 2, text: "test2", checked: true },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const inCompleteTodoCount = todos.filter(
    (todo) => todo.checked === false
  ).length;

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (inputRef.current === null || inputRef.current.value === "") return;

    const newTodo = {
      id: getUniqueKey(),
      text: inputRef.current.value,
      checked: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const handleClickCheck = (targetId: number) => () => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === targetId) return { ...todo, checked: !todo.checked };
      return todo;
    });

    setTodos(updatedTodos);
  };

  const handleClickDelete = (targetId: number) => () => {
    if (confirm("정말 삭제하시겠습니까")) {
      const updatedTodos = todos.filter((todo) => todo.id !== targetId);

      setTodos(updatedTodos);
    }
  };

  return {
    todos,
    inputRef,
    inCompleteTodoCount,
    handleSubmit,
    handleClickCheck,
    handleClickDelete,
  };
};

export default useHomePage;
