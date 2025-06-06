import { useState, useEffect } from 'preact/hooks';

export default function Greeting({ messages }) {
  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];
  const [greeting, setGreeting] = useState(messages[0]);

  // Load data from localStorage on mount
  useEffect(() => {
    const storedGreeting = localStorage.getItem('greeting');
    if (storedGreeting) {
      setGreeting(JSON.parse(storedGreeting));
    }
  }, []);

  // Save data to localStorage
  const saveToLocalStorage = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  };

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button
        onClick={() => {
          const newGreeting = randomMessage();
          setGreeting(newGreeting);
          saveToLocalStorage('greeting', newGreeting);
        }}
      >
        New Greeting
      </button>
    </div>
  );
}