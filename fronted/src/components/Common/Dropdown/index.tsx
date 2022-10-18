import React, { useState } from 'react';
import './style.scss';

export const Dropdown = ({
  title,
  options,
  active,
  setActive,
  imgSrc,
}: {
  title: string;
  options: string[];
  active: string;
  setActive: (value: string) => void;
  imgSrc?: string;
}) => {
  const [dropped, setDropped] = useState(false);

  return (
    <div className="Dropdown">
      <div className="DropdownHead">
        {imgSrc && <img src={imgSrc} alt="dropdown icon" />}
        <div className="DropInfo">
          <p style={active ? { fontSize: '2pt' } : {}}>{title}</p>
          <p>{active}</p>
        </div>

        <div className="DropdownHandler" onClick={() => setDropped(!dropped)}>
          <img
            src={dropped ? 'arrow_drop_up.png' : 'arrow_drop_down.png'}
            alt=""
          />
        </div>
      </div>

      {dropped && (
        <div className="DropdownOptions">
          {options.map(option => (
            <p key={option}>{option}</p>
          ))}
        </div>
      )}
    </div>
  );
};
