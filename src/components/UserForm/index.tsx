import React, { useState } from 'react';
import UserInput from '../UserInput';
import { MdOutlineDeleteOutline as RemoveIcon } from 'react-icons/md';
import { TfiSettings as SettingIcon } from 'react-icons/tfi';

// redux
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  deleteUser,
  changeUserInfo,
  UserType,
} from '../../features/userList/usersSlice';

//types
import { UserFormType } from '../../d';

const UserForm: React.FC<UserFormType> = ({ users }) => {
  const dispatch = useAppDispatch();

  const [isModalActive, setIsModalActive] = useState(true);

  function changeInput(
    value: string,
    user: UserType,
    userProp: keyof UserType
  ) {
    let changedProp =
      userProp === 'address'
        ? { address: { street: value } }
        : { [userProp]: value };
    dispatch(changeUserInfo({ ...user, ...changedProp }));
  }

  return (
    <>
      {users.map((user) => (
        <form key={user.id} className="userList">
          <UserInput
            disabled={isModalActive}
            user={user}
            value={user.name}
            onChange={changeInput}
            valueType="name"
          />
          <UserInput
            disabled={isModalActive}
            user={user}
            value={user.username}
            onChange={changeInput}
            valueType="username"
          />
          <UserInput
            disabled={isModalActive}
            user={user}
            value={user.email}
            onChange={changeInput}
            valueType="email"
          />
          <UserInput
            disabled={isModalActive}
            user={user}
            value={user.address['street']}
            onChange={changeInput}
            valueType="address"
          />
          <RemoveIcon />
          <SettingIcon />
        </form>
      ))}
    </>
  );
};

export default UserForm;
