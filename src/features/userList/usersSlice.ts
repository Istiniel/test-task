import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchUsers } from './fetchUsersAPI';

export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: { street: string };
  isDisabled: boolean;
  isSelected: boolean;
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
      state.users = state.users.filter((e) => {
        return e.id !== action.payload;
      });
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
    editInput: (state, action) => {
      state.users.map((e) => {
        if (e.id === action.payload) {
          e.isDisabled = !e.isDisabled;
        }
        return e;
      });
    },
    confirmDelete: (state, action) => {
      state.users.map(
        (e) => e.id === action.payload && (e.isSelected = !e.isSelected)
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUserList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserList.fulfilled, (state, action) => {
        state.status = 'idle';
        state.users.push(
          ...action.payload.map((e: {}) => {
            return { ...e, isDisabled: true, isSelected: false };
          })
        );
      })
      .addCase(fetchUserList.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { deleteUser, changeUserInfo, editInput, confirmDelete } =
  userListSlice.actions;
export default userListSlice.reducer;

export const selectUsers = (state: RootState) => state.userList.users;
