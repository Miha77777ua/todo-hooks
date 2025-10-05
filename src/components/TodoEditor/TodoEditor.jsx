import { useState } from "react";
import style from "./TodoEditor.module.scss";

export function TodoEditor({ onSubmit }) {
  // state = {
  //   textValue: "",
  // }

  const [textValue, setTextValue] = useState("");

  const handleTextChange = (ev) => {
    // setState({
    //   textValue: ev.target.value,
    // });

    setTextValue(ev.target.value);
  }

  const clearState = () => {
    // setState({
    //   textValue: "",
    // });

    setTextValue("");
  }

  return (
    <form className={style.form} onSubmit={(ev) => onSubmit(ev, clearState)}>
      <input
        type="text"
        placeholder="Task's name"
        className={style.form__input}
        value={textValue}
        onChange={handleTextChange}
        name="text"
        maxLength="35"
      />
      <button className={style.form__submit} type="submit">Add Task</button>
    </form>
  );
}

