import { Post } from '../src/Post';
import { Header } from './components/Header';

import styles from './App.module.css';

import './global.css'
import { Sidebar } from './Sidebar';


export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper} >
        <Sidebar />
        
        <main>
        <Post 
          author="Evandro Lugli"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit consequuntur amet adipisci alias ducimus aut? Alias odio quisquam quasi beatae atque ipsam harum eos, error debitis sapiente, incidunt amet tenetur?"
        />
        <Post 
          author="Felipe"
          content="New post very very nice"
        />
        </main>
      </div>
    </div>
)}