import React from 'react';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Statistics } from './Statistics/Statistics';
import { FrendList } from './FrendList/FrendList';
import { Profile } from './Profile/Profile';

import statisticalData from '../data/statistical-data.json';
import transactions from '../data/transactions.json';
import friends from '../data/friends.json';
import user from '../data/user.json';

import './App.css';

function App() {
  return (
    <div className="App">
      <Profile {...user} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FrendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
