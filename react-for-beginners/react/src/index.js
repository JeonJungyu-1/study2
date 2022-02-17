import React from 'react';
import ReactDOM from 'react-dom';
import App from './Cleanup';
import Button from './Button';
import styles from './index.css';

ReactDOM.render(
  <React.StrictMode>
    <body>
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
    </body>
  </React.StrictMode>,
  document.getElementById('root')
);

//바디의 안에 버튼 구성하고 그 바디를 한개 불러오면 됨.