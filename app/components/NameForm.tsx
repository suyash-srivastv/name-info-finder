import React, { useState } from 'react';
import Loader from './Loader';

const NameForm = ({ onSubmit, loading }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      <button type="submit" disabled={loading}>
        {loading ? <Loader /> : 'Guess'}
      </button>
    </form>
  );
};

export default NameForm;
