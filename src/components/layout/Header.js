import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

function Header() {
  return (
    <div>
      <header>
        <h2>Todo List</h2>
        <Link to="/">Home | </Link>
        <Link to="/about">About</Link>
      </header>
    </div>
  )
}

export default Header;