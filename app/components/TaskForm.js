"use client";

import { useState } from "react";
import styles from "../page.module.css";

export default function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({
      id: Date.now(),
      title,
      description,
      priority,
      completed: false,
    });

    setTitle("");
    setDescription("");
    setPriority("medium");
  };

  return (
    <form className={styles.formData} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className={styles.textarea}
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <div className={styles.priorityCont}>
        <select
          className={styles.select}
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button className={styles.button} type="submit">
          Add Task
        </button>
      </div>
    </form>
  );
}
