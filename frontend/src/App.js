import React from 'react';
import './App.css';
import PaymentModal from './PaymentModal/PaymentModal';

function App() {
  return (
    <div className="App">
      <PaymentModal
	orderId={45896588}
	name="ANY THING FOR YOU සුද්දා"
	amount="9500"
      />
    </div>
  );
}

export default App;
