import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchUsers } from './fetchUsersAPI';

export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: { street: string };
};

interface UserListState {
  users: Array<UserType>;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: UserListState = {
  users: [],
  status: 'idle',
};

export const fetchUserList = createAsyncThunk(
  'userList/fetchUsers',
  async () => {
    const response = await fetchUsers();
    return response;
  }
);

export const userListSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    deleteUser: (state, action: PayloadAction<number>) => {
      state.users.filter((e) => e.id !== action.payload);
    },
    changeUserInfo: (
      state,
      action: PayloadAction<{ [key in keyof Partial<UserType>]: UserType[key] }>
    ) => {
      state.users = [
        ...state.users.filter((e) => e.id !== action.payload['id']),
        action.payload as UserType,
      ].sort((a, b) => a.id - b.id);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUserList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserList.fulfilled, (state, action) => {
        state.status = 'idle';
        state.users.push(...action.payload);
      })
      .addCase(fetchUserList.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { deleteUser, changeUserInfo } = userListSlice.actions;
export default userListSlice.reducer;

export const selectUsers = (state: RootState) => state.userList.users;
