import React, { useEffect } from 'react';
import UserForm from './../UserForm/index';

// redux
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectUsers, fetchUserList } from '../../features/userList/usersSlice';

const UserList: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserList());
  }, []);

  const users = useAppSelector(selectUsers);

  return <UserForm users={users} />;
};

export default UserList;
