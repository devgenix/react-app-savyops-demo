import React, { useState } from 'react';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [step, setStep] = useState<number>(1);
  const MAX_LIMIT = 20;

  const increment = () => {
    if (count + step <= MAX_LIMIT) {
      setCount(count + step);
    } else {
      setCount(MAX_LIMIT);
    }
  };

  const decrement = () => setCount(count - step);
  const reset = () => setCount(0);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>SavyOps React App</h1>
        <p>Simple TypeScript Counter with Step Size</p>
      </header>
      
      <main style={styles.main}>
        <div style={styles.card}>
          <h2>Count is: {count}</h2>
          {count >= MAX_LIMIT && <p style={{ color: 'red' }}>Max limit reached!</p>}
          
          <div style={styles.stepControl}>
            <label>Step Size: </label>
            <select 
              value={step} 
              onChange={(e) => setStep(Number(e.target.value))}
              style={styles.select}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
            </select>
          </div>

          <div style={styles.buttonGroup}>
            <button 
              onClick={increment} 
              style={{...styles.button, opacity: count >= MAX_LIMIT ? 0.5 : 1}}
              disabled={count >= MAX_LIMIT}
            >
              Increment (+{step})
            </button>
            <button 
              onClick={decrement} 
              style={{...styles.button, backgroundColor: '#dc3545'}}
            >
              Decrement (-{step})
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
  stepControl: {
    marginBottom: '20px',
    fontSize: '14px',
  },
  select: {
    padding: '5px',
    borderRadius: '4px',
    marginLeft: '5px',
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
