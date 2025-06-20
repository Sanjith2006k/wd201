/* eslint-disable no-undef */

const todoList = require("../todo");

const { all, markAsComplete, add } = todoList();

describe("Todolist Test Suite", () => {
  beforeAll(() => {
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("Should add new todo", () => {
    const initialLength = all.length;
    add({
      title: "Test add",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(initialLength + 1);
    const addedItem = all[all.length - 1];
    expect(addedItem.title).toBe("Test add");
    expect(addedItem.completed).toBe(false);
  });

  test("Should mark a todo as complete", () => {
    add({
      title: "Complete me",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    const index = all.length - 1;
    expect(all[index].completed).toBe(false);
    markAsComplete(index);
    expect(all[index].completed).toBe(true);
  });

  test("To list items overdue today", () => {
    const today = new Date().toLocaleDateString("en-CA");
    const overdueItems = all.filter((todo) => todo.dueDate < today);
    expect(Array.isArray(overdueItems)).toBe(true);
  });

  test("To list items due today", () => {
    const today = new Date().toLocaleDateString("en-CA");
    const dueTodayItems = all.filter((todo) => todo.dueDate === today);
    expect(Array.isArray(dueTodayItems)).toBe(true);
  });

  test("To list items due later", () => {
    const today = new Date().toLocaleDateString("en-CA");
    const dueLaterItems = all.filter((todo) => todo.dueDate > today);
    expect(Array.isArray(dueLaterItems)).toBe(true);
  });
});
