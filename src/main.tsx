import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ClerkProvider } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY as string | undefined;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key. Please add VITE_CLERK_PUBLISHABLE_KEY to your .env file.');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      appearance={{
        variables: {
          colorPrimary: '#2F6BAE',
          colorBackground: '#FFFFFF',
          colorText: '#333333',
          colorInputBackground: '#FFFFFF',
          colorInputText: '#333333',
          borderRadius: '8px',
        },
        elements: {
          formButtonPrimary: 'bg-[linear-gradient(135deg,#2F6BAE,#5A8DC8)] hover:brightness-95',
          card: 'shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-[#EAEAEA]',
        },
      }}
    >
      <App />
    </ClerkProvider>
  </StrictMode>
);
