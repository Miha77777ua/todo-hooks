import style from "./Info.module.scss";

export function Info({ data }) {
  return (
    <>
      <p className={style.total}>Total: {data.length}</p>
      <p className={style.completed}>Completed: {data.filter(el => el.completed).length}</p>
    </>
  );
}
