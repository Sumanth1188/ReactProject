import React from "react";

const data = [[2, 3, 4], [5, 5], [3, 3, 3]];
const MaxValues = () => {
  const maxValues = data.map(subArray => Math.max(...subArray));
  const sortedMaxValues = maxValues.sort((a, b) => a - b); 
  const output = sortedMaxValues.join(", ");
  return (
    <div>
      <h1>Output={output}</h1>
      
     
    </div>
  );
};

export default MaxValues;