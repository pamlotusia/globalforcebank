  import React, { useEffect, useState } from 'react';

  function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
      // Requisição para o backend
      fetch('http://localhost:5000')
        .then((response) => response.text())
        .then((data) => {
          setMessage(data);
        })
        .catch((error) => console.error('Erro:', error));
    }, []);

    return (
      <div className="App">
        <h1>Olá do React!</h1>
      </div>
    );
  }

  export default App;
