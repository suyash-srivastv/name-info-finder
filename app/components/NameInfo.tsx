import React from 'react';

const NameInfo = ({ age, gender, country }) => {
  return (
    <div className="results">
      <p>Estimated Age: {age}</p>
      <p>Predicted Gender: {gender}</p>
      <p>Most Likely Country: {country}</p>
    </div>
  );
};

export default NameInfo;
