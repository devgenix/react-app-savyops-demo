import React, { useState } from 'react';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const MAX_LIMIT = 10;

  const increment = () => {
    if (count < MAX_LIMIT) {
      setCount(count + 1);
    }
  };

  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>SavyOps React App</h1>
        <p>Simple TypeScript Counter</p>
      </header>
      
      <main style={styles.main}>
        <div style={styles.card}>
          <h2>Count is: {count}</h2>
          {count >= MAX_LIMIT && <p style={{ color: 'red' }}>Max limit reached!</p>}
          <div style={styles.buttonGroup}>
            <button 
              onClick={increment} 
              style={{...styles.button, opacity: count >= MAX_LIMIT ? 0.5 : 1}}
              disabled={count >= MAX_LIMIT}
            >
              Increment
            </button>
            <button 
              onClick={decrement} 
              style={{...styles.button, backgroundColor: '#dc3545'}}
            >
              Decrement
            </button>
            <button 
              onClick={reset} 
              style={{...styles.button, backgroundColor: '#6c757d'}}
            >
              Reset
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    backgroundColor: '#f4f4f9',
    minHeight: '100vh',
    padding: '20px',
  },
  header: {
    marginBottom: '40px',
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    width: '300px',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    justifyContent: 'center',
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
  },
};

export default App;
