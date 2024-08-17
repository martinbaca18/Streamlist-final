import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Find the root element in your HTML
const rootElement = document.getElementById('root');

// Create a root using ReactDOM.createRoot
const root = ReactDOM.createRoot(rootElement);

// Render the App component
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
