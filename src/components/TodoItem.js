import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  const {
    todo, handleChangeProps, deleteTodoProps, setUpdate,
  } = props;
  const { completed, id, title } = todo;

  useEffect(() => () => {
    console.log('Cleaning up...');
  }, []);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <li className="item">
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className="checkbox"
          checked={completed}
          onChange={() => handleChangeProps(id)}
        />
        <button type="submit" onClick={() => deleteTodoProps(id)}>Delete</button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <input
        type="text"
        style={editMode}
        className="textInput"
        value={title}
        onChange={(e) => {
          setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }),
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

TodoItem.defaultProps = {
  todo: {},
};

export default TodoItem;