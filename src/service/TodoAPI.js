// Simulated hardcoded array to store tasks
const tasks = [
  { id: 1, text: "Learn React" },
  { id: 2, text: "Build a To-Do App" },
];

export const getTasksAPI = () => {
  console.log("Data Fetched!");
  return [...tasks]; //Return a copy of tasks
};

export const addTaskAPI = (newTaskText) => {
    console.log("Task Added!")
  const newTask = { id: tasks.length + 1, text: newTaskText };
  tasks.push(newTask);
  return newTask;
};
