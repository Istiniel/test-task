import React from 'react';

//types
import { UserInputType } from '../../d';

const UserInput: React.FC<UserInputType> = ({
  disabled,
  user,
  value,
  valueType,
  onChange,
}) => {
  return (
    <input
      className="userList__item"
      disabled={disabled}
      type="text"
      value={value}
      onChange={(e) => onChange(e.currentTarget.value, user, valueType)}
    />
  );
};

export default UserInput;
