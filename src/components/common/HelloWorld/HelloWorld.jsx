import React, { useState } from 'react';
import './HelloWorld.css';
const HelloWorld = ({ msg }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  return (
    <div className='HelloWorld'>
      <h1 data-testid='title'>{msg}</h1>

      <p>
        Recommended IDE setup:{' '}
        <a href='https://code.visualstudio.com/' target='_blank' rel='noreferrer'>
          VSCode
        </a>
      </p>

      <p>
        See <code>README.md</code> for more information.
      </p>

      <p>
        <a href='https://vitejs.dev/guide/features.html' target='_blank' rel='noreferrer'>
          Vite Docs
        </a>{' '}
        |{' '}
        <a href='https://reactjs.org/' target='_blank' rel='noreferrer'>
          React Docs
        </a>
      </p>

      <button type='button' onClick={increment}>
        count is: {count}
      </button>
      <p>
        Edit
        <code>components/HelloWorld/HelloWorld.tsx</code> to test hot module replacement.
      </p>
    </div>
  );
};

export default HelloWorld;
