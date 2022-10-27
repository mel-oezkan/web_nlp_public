import React, { useRef, useState } from 'react';
import { handleKeyDown, handleSubmit } from './handler';
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
  const inputRef = useRef<HTMLInputElement>(null);
  const [dropped, setDropped] = useState(false);
  const [tempValue, setTempValue] = useState('');

  return (
    <div className="Dropdown">
      <div className="DropdownHead">
        {imgSrc && (
          <div className="DropdownIcon">
            <img src={imgSrc} alt="dropdown icon" />
          </div>
        )}
        <div className="DropdownInfo">
          <p style={active ? { fontSize: '7pt', fontWeight: 'normal' } : {}}>
            {title}
          </p>
          {active === 'Custom' ? (
            <div className="CustomItemHandler">
              <form
                action=""
                onSubmit={e => handleSubmit(e, tempValue, setActive)}
                onKeyDown={e => handleKeyDown(e, inputRef, setTempValue)}
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={tempValue}
                  onChange={e => {
                    setTempValue(e.target.value);
                  }}
                />
              </form>
            </div>
          ) : (
            <p>{active}</p>
          )}
        </div>

        <div className="DropdownHandler" onClick={() => setDropped(!dropped)}>
          <img
            src={dropped ? 'arrow_drop_up.png' : 'arrow_drop_down.png'}
            alt=""
          />
        </div>
      </div>

      <div
        className="DropdownOptions"
        style={dropped ? { display: 'block' } : { display: 'none' }}
      >
        {options.map(option => (
          <div
            key={option}
            className="DropdownOption"
            onClick={() => {
              setActive(option);
              setDropped(false);
            }}
          >
            <p>{option}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
