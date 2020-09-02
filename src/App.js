import React from 'react';
import user from './user.json';
import statisticalData from './statistical-data.json';
import transactions from './transactions.json';
import { Profile } from './components/Profile/Profile.jsx';
import { Statistics } from './components/Statistics/Statistics.jsx';
import { FrendList } from './components/FrendList/FrendList.jsx';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Profile avatar={user.avatar} name={user.name} tag={user.tag} location={user.location} stats={user.stats} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FrendList />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
