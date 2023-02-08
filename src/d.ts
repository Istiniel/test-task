import { UserType } from './features/userList/usersSlice';

//types
interface ButtonType {
  loading?: boolean;
  onClick?: (...args: Array<any>) => void;
  disabled?: boolean;
  type?: 'danger' | 'success' | 'warning' | 'primary';
  min?: boolean;
  large?: boolean;
  block?: boolean;
  outlined?: boolean;
  text?: boolean;
  children?: React.ReactNode;
}

interface DropDownType {
  type: 'hover' | 'click';
  title?: string;
  options: string[];
  children?: React.ReactNode;
  onOptionChoose: () => void;
}

interface UserFormType {
  users: UserType[];
  children?: React.ReactNode;
}

interface UserInputType {
  disabled: boolean;
  user: UserType;
  value: string;
  valueType: keyof UserType;
  onChange: (value: string, user: UserType, userProp: keyof UserType) => void;
}

export type { ButtonType, DropDownType, UserFormType, UserInputType };
