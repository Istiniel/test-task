import React, { useState } from 'react';
import './styles/App.module.scss';

//icon
import icon from './assets/icons/line_item.svg';
import { FaBuffer } from 'react-icons/fa';

//components
import Button from './components/Button';
import Wrapper from './components/Wrapper/index';
import DropDown from './components/DropDown/index';
import UserList from './components/UserList/index';

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Wrapper>
      <Button
        outlined
        large
        block
        type={'success'}
        loading={loading}
        onClick={() => {
          setLoading(!loading);
        }}
      >
        {<FaBuffer /> || <img src={icon} alt="icon" />}
        Download
      </Button>
      <DropDown
        type="hover"
        title="HOVER"
        options={[
          '1. string',
          '2. number',
          '3. boolean',
          '4. object',
          '5. null',
        ]}
        onOptionChoose={() => alert('Clicked')}
      />
      <DropDown
        type="click"
        title="CLICK"
        options={[
          '5. string',
          '4. number',
          '3. boolean',
          '2. object',
          '1. null',
        ]}
        onOptionChoose={() => alert('Clicked')}
      />

      <UserList />
    </Wrapper>
  );
};

export default App;
