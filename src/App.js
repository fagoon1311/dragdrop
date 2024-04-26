import './App.css';
import Notes from './components/Notes';
import {useState} from 'react'
function App() {
  const [notes, setNotes] = useState([
    {
      "id":1,
      "heading": "Meeting Agenda",
      "description": "This note outlines the agenda for the team meeting scheduled on April 26, 2024. It includes discussion topics such as project updates, upcoming deadlines, and allocation of tasks."
    },
    { 
      "id":2,
      "heading": "Grocery List",
      "description": "This note contains a list of groceries needed for the week. It includes items such as milk, bread, eggs, fruits, and vegetables. The quantities needed are also specified for each item."
    },
    {
      "id":3,
      "heading": "Fitness Plan",
      "description": "This note details the fitness plan for the upcoming week. It includes workout routines for each day, focusing on cardio, strength training, and flexibility exercises. Rest days are also scheduled."
    }
  ])
  
  return (
    <div className="App">
      <Notes notes = {notes} setNotes={setNotes}/>
    </div>
  );
}

export default App;
