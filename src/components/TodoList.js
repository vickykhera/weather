import React, { useState } from 'react';

function TodoList(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(props.item.text);
  const [completionMessage, setCompletionMessage] = useState('');

  const handleEditSubmit = (e) => {
    e.preventDefault();
    props.editItem(props.index, editText);
    setIsEditing(false);
  };

  const handleMarkAsDone = () => {
    props.markAsDone(props.index);
    setCompletionMessage('Task completed!'); // Set the completion message
    setTimeout(() => setCompletionMessage(''), 2000); // Clear message after 2 seconds
  };

  return (
    <li className={`list-item ${props.item.isCompleted ? 'completed' : ''}`}>
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className='input-edit'
          />
          <button type="submit" className='edit-btn'>Save</button>
        </form>
      ) : (
        <>
          {props.item.text}
          <span className='icons'>
            <i
              className="fa-solid fa-check icon-done"
              onClick={handleMarkAsDone} // Call the new function here
              title="Mark as Done"
            ></i>
            <i
              className="fa-solid fa-edit icon-edit"
              onClick={() => setIsEditing(true)}
              title="Edit Task"
            ></i>
            <i
              className="fa-solid fa-trash-can icon-delete"
              onClick={() => props.deleteItem(props.index)}
              title="Delete Task"
            ></i>
          </span>
          {completionMessage && <span className='completion-message'>{completionMessage}</span>} {/* Display message */}
        </>
      )}
    </li>
  );
}

export default TodoList;
