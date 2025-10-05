import style from "./TodoList.module.scss";

export function TodoList({ tasks, onRemove, onComplete, filter }) {
  return (
    <>
      {
        !tasks[0]
          ? <p className={style.notification}>No tasks yet!</p>
          : <ul className={style.todo}>
            {tasks.filter(el => {
              if (filter !== "") {
                return el.text.toLowerCase().includes(filter.toLowerCase())
              }

              return el;
            }).map((el, id) => (
              <li className={style.todo__item} key={id} data-id={el.id} onClick={onComplete}>
                <p className={style.todo__text} onClick={onComplete}>{el.completed ? "✅" : "⛔"} {el.text}</p>
                <button className={style.todo__remove} onClick={onRemove}>Remove</button>
              </li>
            ))}
          </ul>
      }
    </>
  );
}
