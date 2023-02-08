import React, { useRef } from 'react';
import st from '../../styles/components/_userInput.module.scss';

//types
import { UserInputType } from '../../d';
import { UserType } from '../../features/userList/usersSlice';

const UserInput: React.FC<UserInputType> = ({
  user,
  value,
  valueType,
  onChange,
  validator,
}) => {
  const input = useRef<HTMLInputElement>(null);

  const handleInput = (
    value: string,
    user: UserType,
    valueType: keyof UserType
  ) => {
    onChange(value, user, valueType);
    if (Number(input.current?.value.length) < 1) {
      validator?.setIsValideInput(false);
    } else if (
      user.name.length &&
      user.username.length &&
      user.address['street'].length &&
      user.email.length
    ) {
      validator?.setIsValideInput(true);
    }
  };
  return (
    <div className={st.input__container}>
      <label htmlFor={valueType} className={st.userForm__label}>
        {valueType}
      </label>
      <input
        ref={input}
        maxLength={20}
        required={true}
        name={valueType}
        className={st.userForm__input}
        disabled={user.isDisabled}
        type="text"
        value={value}
        onChange={(e) => handleInput(e.currentTarget.value, user, valueType)}
      />
    </div>
  );
};

export default UserInput;
