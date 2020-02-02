import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

  getStyle = () => {
    return {
      background: 'rgb(157, 157, 157)',
      borderBottom: '1px solid #333',
      padding: '0 1rem',
      textDecoration: this.props.todo.completed ? 'line-through': 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <h3>
          <input type="checkbox" onChange={this.props.markComplete.bind
            (this, id)} /> {' '}
          { title }
          <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>X</button>
        </h3>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

// Button style
const btnStyle = {
  background: 'red',
  color: '#fff',
  padding: '3px 3px',
  float: 'right',
  borderRadius: '50%',
  cursor: 'pointer'
}

export default TodoItem
