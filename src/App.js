import React from 'react';
import IssueForm from './components/IssueForm/IssueForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Issue Tracker</h1>
      </header>
      <IssueForm></IssueForm>
    </div>
  );
}

export default App;
