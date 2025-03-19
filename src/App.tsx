import React from 'react';
import type { MouseEvent } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // jsx片段
  const list = (
    <ul style={{ color: 'green' }}>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  );
  // fragment片段
  const list1 = (
    <>
      <li style={{ color: 'green' }}>6</li>
      <li style={{ color: 'green' }}>7</li>
      <li style={{ color: 'green' }}>8</li>
      <li style={{ color: 'green' }}>9</li>
      <li style={{ color: 'green' }}>10</li>
    </>
  );
  const fn = (event: MouseEvent<HTMLButtonElement>, name: string) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('fn点击事件。。。。。', name);
  };
  const buttonStyle = { backgroundColor: 'green', color: 'white', borderColor: 'white' };
  const aStyle = { color: 'green', backgroundColor: 'black' };
  return (
    <div className="App" style={{ backgroundColor: 'white' }}>
      <header className="App-header">
        {/* jsx 注释内容*/}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <label htmlFor="input" style={{ color: 'green' }}>
          输入框
        </label>
        <button
          style={buttonStyle}
          onClick={event => {
            fn(event, '袁修飞');
          }}
        >
          点击事件
        </button>
        <input type="text" id="input" />
        <br />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={aStyle}
        >
          Learn React 18
        </a>
        {list}
        {list1}
      </header>
    </div>
  );
}

export default App;
