import style from "./Filter.module.scss";

export function Filter({ filter, onFilterChange }) {
  return (
    <input
      type="text"
      placeholder="🔍Filter..."
      className={style.form__filter}
      value={filter}
      onChange={onFilterChange}
    />
  );
}
