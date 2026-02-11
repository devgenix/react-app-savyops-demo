import React, { useState } from 'react';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>SavyOps React App</h1>
        <p>Simple TypeScript Counter</p>
      </header>
      
      <main style={styles.main}>
        <div style={styles.card}>
          <h2>Count is: {count}</h2>
          <div style={styles.buttonGroup}>
            <button 
              onClick={() => setCount(count + 1)}
              style={styles.button}
            >
              Increment
            </button>
            <button
              onClick={() => setCount(count - 1)} 
              style={{...styles.button, backgroundColor: '#dc3545'}}
            >
              Decrement
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
