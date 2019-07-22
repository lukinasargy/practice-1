import React from 'react';
import './UserInput.css';
const userinput = (props) => {
  return (
    <div className="UserInput">
      <input onChange={props.changed} type="text" value={props.username}/>
    </div>
  );
}
export default userinput;