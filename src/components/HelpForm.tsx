import React, { useState } from 'react';

const HelpForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [question, setQuestion] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setError(null);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError(null);
  };

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
    setError(null);
  };

  const handleQuestionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion(e.target.value);
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('tu-url-de-api-de-envio-de-correo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, question }),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        setSuccess(false);
        setError('Error al enviar la pregunta. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      setSuccess(false);
      setError('Error de red. Por favor, verifica tu conexión e inténtalo de nuevo.');
    }

    // Limpiar los campos del formulario
    setName('');
    setEmail('');
    setSubject('');
    setQuestion('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: '400px',
        margin: 'auto',
        padding: '40px',
        border: '5px solid #fff',
        borderRadius: '44px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Nombre:</label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Correo Electrónico:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Asunto:</label>
        <input
          type="text"
          value={subject}
          onChange={handleSubjectChange}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Detalles de la Duda:</label>
        <textarea
          value={question}
          onChange={handleQuestionChange}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        ></textarea>
      </div>

      <button
        type="submit"
        style={{
          background: '#4caf50',
          color: 'white',
          padding: '10px',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '44px',
          //Centrar el botón
          display: 'block',
          margin: 'auto',
        }}
      >
        Enviar
      </button>

      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
      {success && <p style={{ color: 'green', marginTop: '10px' }}>Pregunta enviada exitosamente.</p>}
    </form>
  );
};

export default HelpForm;
