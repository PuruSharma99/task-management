"use client"; 

import React from "react";
import styles from "../page.module.css"; 

const EditTaskModal = ({ task, onClose, onSave }) => {
  const [editedTask, setEditedTask] = React.useState(task);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({
      ...editedTask,
      [name]: value,
    });
  };

  const submitEdit = () => {
    onSave(editedTask);
    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.editTaskTxt}>Edit Task</div>
        <input
          className={styles.input}
          type="text"
          name="title"
          value={editedTask.title}
          onChange={handleEditChange}
          placeholder="Title"
        />
        <textarea
          className={styles.textarea}
          name="description"
          value={editedTask.description}
          onChange={handleEditChange}
          placeholder="Description"
        />
        <div className={styles.priorityCont}>
          <select
            className={styles.select}
            name="priority"
            value={editedTask.priority}
            onChange={handleEditChange}
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <div className={styles.editContBtns}>
            <button className={styles.button} onClick={submitEdit}>
              Update
            </button>
            <button className={styles.editCancel} onClick={onClose}>
              Discard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;
