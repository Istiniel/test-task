import React, { useState, useRef } from 'react';
import st from '../../styles/components/_dropdown.module.scss';
import { useToggleDropDown } from '../../hooks/useToggleDropDown';

//types
import { DropDownType } from '../../d';

const DropDown: React.FC<DropDownType> = ({
  title = 'DropDown',
  options,
  onOptionChoose,
  type,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  let dropContent = useRef<HTMLDivElement>(null);

  let [dropDownFocusOn, dropDownFocusOff, dropDownToggle] = useToggleDropDown(
    isOpen,
    setIsOpen,
    dropContent
  );

  return (
    <div
      ref={dropContent}
      className="dropDown"
      onMouseEnter={
        type === 'hover'
          ? (e) => {
              dropDownFocusOn();
            }
          : undefined
      }
      onMouseLeave={
        type === 'hover'
          ? (e) => {
              dropDownFocusOff();
            }
          : undefined
      }
      onClick={
        type === 'click'
          ? (e) => {
              dropDownToggle();
            }
          : undefined
      }
    >
      <div className={st['dropDown__title']}>{title}</div>
      {isOpen && (
        <ul
          className={st['dropDown__options']}
          onClick={(e) => {
            setIsOpen(false);
            onOptionChoose();
          }}
        >
          {options.map((option) => (
            <li key={option}>{option}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
