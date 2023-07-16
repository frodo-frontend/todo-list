import { useRef, useState } from "react";
import { getUniqueKey } from "../../../utils/key";

type Todo = {
  id: number;
  text: string;
  checked: boolean;
};

const useHomePage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (inputRef.current === null) return;

    const newTodo = {
      id: getUniqueKey(),
      text: inputRef.current.value,
      checked: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const handleClickCheck = (target: number) => () => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === target) return { ...todo, checked: !todo.checked };
      return todo;
    });

    setTodos(updatedTodos);
  };

  const handleClickDelete = (target: number) => () => {
    if (confirm("정말 삭제하시겠습니까")) {
      const updatedTodos = todos.filter((todo) => todo.id !== target);

      setTodos(updatedTodos);
    }
  };

  return {
    todos,
    inputRef,
    handleSubmit,
    handleClickCheck,
    handleClickDelete,
  };
};

export default useHomePage;
