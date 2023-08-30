import './App.css';

import { SessionButton } from 'react-login-broker-library';

function App() {
  const handleSessionReceived = (sessionId) => {
		console.log('Received sessionId', sessionId);
		// perform further action
    // window.location.href="https://login.broker/"
	}

  const handleErrorReceived = (error) => {
    console.log('Error happened', error);
  }
  
  return (
    <div className="App">
      <div>
        <SessionButton platform={'google'} onSessionReceived={handleSessionReceived} onErrorReceived={handleErrorReceived} />
        <SessionButton platform={'github'} onSessionReceived={handleSessionReceived} onErrorReceived={handleErrorReceived} />
      </div>
    </div>
  );
}

export default App;
