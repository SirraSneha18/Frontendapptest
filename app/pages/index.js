import React, { useState, useEffect } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchBackendMessage = async () => {
      try {
        // Replace 'https://sbackendtest.azurewebsites.net' with your actual Azure App Service URL
        const BACKEND_URL = 'https://sbackendtest.azurewebsites.net';

        const response = await fetch(`${BACKEND_URL}/api/message`);
        if (!response.ok) {
          throw new Error('Failed to fetch data from backend');
        }
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchBackendMessage();
  }, []);

  return (
    <div>
      <h1>Welcome to my Next.js App!</h1>
      <p>Message from backend: {message}</p>
    </div>
  );
}
