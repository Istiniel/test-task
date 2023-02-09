import React, { useState } from 'react';
import UserInput from '../UserInput';
import st from '../../styles/components/_userForm.module.scss';
import { IconContext } from 'react-icons/lib';
import DeleteModal from './../DeleteModal/index';
import SettingsModal from './../SettingsModal/index';

//icons
import { MdOutlineDeleteOutline as RemoveIcon } from 'react-icons/md';
import { TfiSettings as SettingIcon } from 'react-icons/tfi';

// redux
import { useAppDispatch } from '../../app/hooks';
import {
  confirmDelete,
  changeUserInfo,
  UserType,
  editInput,
} from '../../features/userList/usersSlice';

//types
import { UserFormType } from '../../d';

const UserForm: React.FC<UserFormType> = ({ users }) => {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const dispatch = useAppDispatch();

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

  function toggleModalWindow(id: number) {
    setIsModalActive(true);
    dispatch(confirmDelete(id));
  }

  function toggleSettings(id: number) {
    setIsSettingsOpen(true);
    dispatch(editInput(id));
  }

  return (
    <>
      {users.map((user, index) => (
        <form className={st.userForm} key={user.id}>
          <UserInput
            user={user}
            value={user.name}
            onChange={changeInput}
            valueType="name"
          />
          <UserInput
            user={user}
            value={user.username}
            onChange={changeInput}
            valueType="username"
          />
          <UserInput
            user={user}
            value={user.email}
            onChange={changeInput}
            valueType="email"
          />
          <UserInput
            user={user}
            value={user.address['street']}
            onChange={changeInput}
            valueType="address"
          />
          <div className={st.userForm__buttons}>
            <IconContext.Provider value={{ className: st.userForm__icon }}>
              <div
                onClick={() => {
                  toggleModalWindow(user.id);
                }}
              >
                <RemoveIcon />
              </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ className: st.userForm__icon }}>
              <div onClick={() => toggleSettings(user.id)}>
                <SettingIcon />
              </div>
            </IconContext.Provider>
          </div>
        </form>
      ))}
      {isSettingsOpen && (
        <SettingsModal
          changeInput={changeInput}
          settings={{ isSettingsOpen, setIsSettingsOpen }}
        />
      )}
      {isModalActive && (
        <DeleteModal settings={{ isModalActive, setIsModalActive }} />
      )}
    </>
  );
};

export default UserForm;
