import React from 'react';

//styles
import st from '../../styles/components/_button.module.scss';
import Loader from './../Loader/index';

//types
import { ButtonType } from '../../d';

const Button: React.FC<ButtonType> = ({
  loading,
  onClick,
  disabled,
  type = 'primary',
  min,
  large,
  block,
  outlined,
  text,
  children,
}) => {
  function classesGenerator() {
    let classList = [st.button];
    type && classList.push(st[type]);
    text && classList.push(st.text);
    disabled && classList.push(st.disabled);
    min && classList.push(st.min);
    large && classList.push(st.large);
    block && classList.push(st.block);
    outlined && classList.push(st.outlined);
    return classList.join(' ');
  }

  return (
    <button
      disabled={disabled}
      className={classesGenerator()}
      type="submit"
      onClick={onClick}
    >
      {loading && <Loader />}
      {!loading && children}
    </button>
  );
};

export default Button;
