"use client";
import React, { useState } from 'react';
import fetchNameInfo from '../services/NameService';
import NameForm from '../components/NameForm';
import NameInfo from '../components/NameInfo';

const Main = () => {
  const [nameInfo, setNameInfo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (name) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchNameInfo(name);
      setNameInfo(data);
    } catch (error) {
      console.error(error);
      setError('Error fetching data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Guess : Age, Gender, and Country</h1>
      <NameForm onSubmit={handleSubmit} loading={loading} />
      {error && <p className="error">{error}</p>}
      {nameInfo && <NameInfo {...nameInfo} />}
    </div>
  );
};

export default Main;
