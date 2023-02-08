import React, { useEffect, useRef } from 'react';
import Button from './../Button/index';
import st from '../../styles/components/_modalDelete.module.scss';

//types
import { confirmDelete, deleteUser } from '../../features/userList/usersSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectUsers } from '../../features/userList/usersSlice';

interface DeleteModalType {
  settings: {
    isModalActive: boolean;
    setIsModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

const DeleteModal: React.FC<DeleteModalType> = ({ settings }) => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  });

  const closeModal = (e: React.SyntheticEvent<EventTarget>) => {
    let id = users.reduce((acc, e) => {
      return e.isSelected === true ? (acc += e.id) : acc;
    }, 0);
    dispatch(confirmDelete(id));
    settings.setIsModalActive(false);
  };

  const deleteUserById = (e: React.SyntheticEvent<EventTarget>) => {
    let id = users.reduce((acc, e) => {
      return e.isSelected === true ? (acc += e.id) : acc;
    }, 0);
    dispatch(deleteUser(id));
    settings.setIsModalActive(false);
  };

  return (
    <div className={st.modalDelete} onClick={closeModal}>
      <div
        className={st.modalDelete__frame}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={st.modalDelete__title}>
          <h2>Удалить?</h2>
        </div>
        <div className={st.modalDelete__buttons}>
          <Button min type="danger" onClick={deleteUserById}>
            Удалить
          </Button>
          <Button min type="warning" onClick={closeModal}>
            Отмена
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
