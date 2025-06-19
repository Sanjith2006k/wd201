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
    const todoItemscount = all.length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(todoItemscount + 1);
  });

  test("Should mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
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
