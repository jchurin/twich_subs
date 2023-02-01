import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Form from './components/form';
import List from './components/list';
import { Sub } from './types';



interface AppState {
  subs: Array<Sub>
}

const INITIAL_STATE = [
  {
    nick: 'dapelu',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description: 'Helps on moderating the chat sometimes'
  },
  {
    nick: 'sergio_serrano',
    subMonths: 7,
    avatar: 'https://i.pravatar.cc/150?u=sergio_serrano'
  },
]



function App() {
  const [subs, setSubs] = useState<AppState['subs']>([])
  const divRef = useRef<HTMLDivElement>(null)


  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])

  const handleNewSub = (newSub: Sub) => {
    setSubs(subs => ([...subs, newSub]))
  }

  return (
    <div className="App" ref={divRef}>
      <h1>Twich Subs</h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
