type Props = {
  text: string;
  handleClickCheck: () => void;
  handleClickDelete: () => void;
};

const Todo = (props: Props) => {
  const { text, handleClickCheck, handleClickDelete } = props;

  return (
    <div>
      <span>{text}</span>
      <button type="button" onClick={handleClickCheck}>
        ✅
      </button>
      <button type="button" onClick={handleClickDelete}>
        🗑️
      </button>
    </div>
  );
};

export default Todo;
