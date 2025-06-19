/* eslint-disable no-undef */
const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    return all.filter(
      (todo) => todo.dueDate < new Date().toLocaleDateString("en-CA")
    );

    // Write the date check condition here and return the array
    // of overdue items accordingly.
  };

  const dueToday = () => {
    return all.filter(
      (todo) => todo.dueDate === new Date().toLocaleDateString("en-CA")
    );
  };

  const dueLater = () => {
    return all.filter(
      (todo) => todo.dueDate > new Date().toLocaleDateString("en-CA")
    );
    // Write the date check condition here and return the array
    // of todo items that are due later accordingly.
  };

  const toDisplayableList = (list) => {
    let s = "";

    for (let i = 0; i < list.length; i++) {
      let a = list[i];
      let b = "[ ]";

      if (a.completed) {
        b = "[x]";
      }

      if (a.dueDate === today) {
        s = s + `${b} ${a.title}\n`;
      } else {
        s = s + `${b} ${a.title} ${a.dueDate}\n`;
      }
    }

    return s;
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;
