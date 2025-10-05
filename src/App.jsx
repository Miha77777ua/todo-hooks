import { useState } from "react";
import { TodoEditor } from "./components/TodoEditor/TodoEditor";
import { TodoList } from "./components/TodoList/TodoList";
import { Filter } from "./components/Filter/Filter";
import { Info } from "./components/Info/Info";
import data from "./data/data.json";
import style from "./App.module.scss";

function App() {
  // state = {
  //   tasks: data,
  //   filter: "",
  // }

  const [tasks, setTasks] = useState(data);
  const [filter, setFilter] = useState("");

  const handleRemove = (ev) => {
    // this.setState({
    //   tasks: this.state.tasks.filter(el => el.id !== ev.target.parentElement.dataset.id),
    // });

    setTasks(tasks.filter(el => el.id !== ev.target.parentElement.dataset.id));
  }

  const handleSubmit = (ev, clearState) => {
    ev.preventDefault();

    // this.setState((prev) => {
    //   let newID;
    //
    //   if (prev.tasks[0]) {
    //     newID = `id-${Number(prev.tasks[prev.tasks.length - 1].id.split("-")[1]) + 1}`;
    //   } else {
    //     newID = "id-1";
    //   }
    //
    //   return {
    //     tasks: [...prev.tasks, { id: newID, text: ev.target.elements.text.value, checked: false }],
    //   }
    // });

    let newID;

    if (tasks[0]) {
      newID = `id-${Number(tasks[tasks.length - 1].id.split("-")[1]) + 1}`;
    } else {
      newID = "id-1";
    }

    setTasks([...tasks, { id: newID, text: ev.target.elements.text.value, checked: false }]);

    clearState();
  }

  const handleComplete = (ev) => {
    // this.setState((prev) => {
    //   return {
    //     tasks: prev.tasks.map((el) => {
    //       if (el.id === ev.target.dataset.id) {
    //         return {
    //           ...el,
    //           completed: !el.completed,
    //         };
    //       }
    //       return el;
    //     }),
    //   };
    // });

    if (ev.target === ev.currentTarget) {
      setTasks(tasks.map((el) => {
        if (el.id === ev.target.dataset.id) {
          return {
            ...el,
            completed: !el.completed,
          };
        }

        return el;
      }));
    }
  }

  const handleFilterChange = (ev) => {
    // this.setState({
    //   filter: ev.target.value,
    // });

    setFilter(ev.target.value);
  }

  return (
    <>
      <h1 className={style.title}>ToDo List</h1>
      <div className={style.info__block}>
        <Info data={tasks} />
        <Filter filter={filter} onFilterChange={handleFilterChange} />
      </div>
      <div className={style.wrapper}>
        <TodoEditor onSubmit={handleSubmit} />
        <div className={style.todo__wrap}>
          <TodoList
            tasks={tasks}
            onRemove={handleRemove}
            onComplete={handleComplete}
            filter={filter}
          />
        </div>
      </div>
    </>
  );
}

export default App;
