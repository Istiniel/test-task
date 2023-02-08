import React, { useEffect, useRef, useState } from 'react';
import Button from './../Button/index';
import st from '../../styles/components/_settingsModal.module.scss';

//types
import {
  changeUserInfo,
  editInput,
  UserType,
} from '../../features/userList/usersSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectUsers } from '../../features/userList/usersSlice';
import UserInput from '../UserInput';

interface SettingsModalType {
  changeInput: (
    value: string,
    user: UserType,
    userProp: keyof UserType
  ) => void;
  settings: {
    isSettingsOpen: boolean;
    setIsSettingsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

const SettingsModal: React.FC<SettingsModalType> = ({
  changeInput,
  settings,
}) => {
  const [isValideInput, setIsValideInput] = useState<boolean>(true);

  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);

  let activeUser = users.filter((e) => e.isDisabled === false)[0];

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  });

  const closeModal = (e: React.SyntheticEvent<EventTarget>) => {
    if (!isValideInput) return;
    dispatch(editInput(activeUser.id));
    settings.setIsSettingsOpen(false);
  };

  const saveChanges = (e: React.SyntheticEvent<EventTarget>) => {
    if (!isValideInput) return;
    dispatch(editInput(activeUser.id));
    settings.setIsSettingsOpen(false);
  };

  return (
    <div className={st.modalSettings} onMouseDown={closeModal}>
      <form
        className={st.modalSettings__frame}
        onMouseDown={(e) => e.stopPropagation()}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className={st.modalSettings__title}>
          <UserInput
            validator={{ isValideInput, setIsValideInput }}
            user={activeUser}
            value={activeUser.name}
            onChange={changeInput}
            valueType="name"
          />
          <UserInput
            validator={{ isValideInput, setIsValideInput }}
            user={activeUser}
            value={activeUser.username}
            onChange={changeInput}
            valueType="username"
          />
          <UserInput
            validator={{ isValideInput, setIsValideInput }}
            user={activeUser}
            value={activeUser.email}
            onChange={changeInput}
            valueType="email"
          />
          <UserInput
            validator={{ isValideInput, setIsValideInput }}
            user={activeUser}
            value={activeUser.address['street']}
            onChange={changeInput}
            valueType="address"
          />
        </div>
        <div className={st.modalSettings__buttons}>
          <Button min type="success" onClick={saveChanges}>
            Сохранить
          </Button>
          <Button min type="danger" onClick={closeModal}>
            Отмена
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SettingsModal;
