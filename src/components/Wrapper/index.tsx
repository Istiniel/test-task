import React from 'react';
import st from '../../styles/components/_wrapper.module.scss';

const Wrapper: React.FC<any> = ({ children }) => {
  return <div className={st.wrapper}>{children}</div>;
};

export default Wrapper;
