'use client';

import { useState } from 'react';

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] }), // Hier wird der Fehler behoben
      });

      if (!res.ok) {
        throw new Error('API request failed.');
      }

      const data = await res.json();

      setMessages(prev => [...prev, data.choices[0].message]);
    } catch (error) {
      console.error(error); // Bessere Fehlerausgabe
      setMessages(prev => [...prev, { role: 'assistant', content: 'Entschuldigung, etwas ist schiefgelaufen.'}]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className='flex flex-col h-screen max-w-2xl mx-auto px-4 py-8 font-sans'>
        <h1 className='text-3xl font-bold text-center mb-6'>TrueSelfChat</h1>

        {/* HAUPT-CHAT-CONTAINER */}
        <div className='flex-1 overflow-y-auto border-gray-300 rounded-lg p-4 mb-4 flex flex-col space-y-4'>
          {messages.length === 0 && (
            <p className='text-center text-lg text-indigo-300 '>Hallo! Stell mir eine Frage und ich werde versuchen, sie zu beantworten.</p>
          )}

          {/* Nachrichten werden hier gemappt */}
          {messages.map((msg, index) => (

            <div
            key={index} 
            className={`
              p-3 rounded-2xl max-w-[80%]
              ${msg.role === 'user'
                ? 'self-end bg-indigo-400 text-white'
                : 'self-start bg-gray-200 text-gray-800'
              }
            `}
            >
              {msg.content} 
            </div>
          ))}

          {loading && (
            <div className='self-start text-gray-500'>
              <span role='img' aria-label='loading'>...</span> TrueSelfChat tippt...
            </div>
          )}
        </div>

        {/* EINGABE & SENDEN-BUTTON. */}
        <div className='flex gap-4 mx-8'>
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') sendMessage(); }}
            disabled={loading}
            className='flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400'
            placeholder='Schreibe eine Nachricht...' 
            />
            <button
            onClick={sendMessage}
            disabled={loading}
            className='bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-300 disabled:bg-blue-100 transition-colors' >
              Senden
            </button>
        </div>
          
      </div>

    </>
  );
}
