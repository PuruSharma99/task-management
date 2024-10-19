"use client";

import { useState } from "react";
import styles from "../page.module.css";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import EditTaskModal from "./EditTaskModal";

export default function TaskList({
  tasks = [],
  deleteTask,
  toggleCompleteTask,
  editTask,
}) {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentTask, setCurrentTask] = useState({});

  const startEditing = (task) => {
    setCurrentTask(task);
    setShowModal(true);
  };

  const handleSave = (updatedTask) => {
    editTask(updatedTask);
    setShowModal(false);
  };

  const getPriorityStyle = (priority) => {
    switch (priority) {
      case "high":
        return { backgroundColor: "red", color: "white" };
      case "medium":
        return { backgroundColor: "yellow", color: "black" };
      case "low":
        return { backgroundColor: "green", color: "white" };
      default:
        return {};
    }
  };

  const handleToggleComplete = (taskId) => {
    toggleCompleteTask(taskId);
  };

  return (
    <div className={styles.taskGrid}>
      {tasks.map((task) => (
        <div key={task.id} className={styles.task}>
          <div className={styles.taskTitle}>{task.title}</div>
          <div className={styles.taskDescription}>{task.description}</div>
          <div className={styles.endPriorityBox}>
            <div
              className={styles.priority}
              style={getPriorityStyle(task.priority)} // Apply the dynamic style
            >
              Priority: {task.priority}
            </div>
            <div className={styles.taskEndCont}>
              <button
                className={styles.completeTask}
                onClick={() => handleToggleComplete(task.id)}
                disabled={task.completed}
              >
                {task.completed ? "Completed" : "Pending"}
              </button>
              <div className={styles.editDeleteBtns}>
                <div
                  className={styles.icons}
                  onClick={() => startEditing(task)}
                >
                  <FaRegEdit />
                </div>
                <div
                  className={styles.icons}
                  onClick={() => deleteTask(task.id)}
                >
                  <MdDelete />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {showModal && (
        <EditTaskModal
          task={currentTask}
          onClose={() => setShowModal(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
