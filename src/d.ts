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

export type { ButtonType, DropDownType };
