import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Plataforma Jurídica</h1>
      <p>Em breve: cadastro de clientes e processos!</p>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);