import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import NotesList from '../NotesList/NotesList';
import Note from '../Note/Note';
import './App.css';

class App extends Component {
  state = {
    notes: [
      {title: 'Note1 title', content: 'aksdlfjalsdjflkasjfl kslkdfjlks'},
      {title: 'Note2 title', content: 'aksdlfjalsdjflkasjfl kslkdfjlks'},
      {title: 'Note3 title', content: 'aksdlfjalsdjflkasjfl kslkdfjlks'},
      {title: 'Note4 title', content: 'aksdlfjalsdjflkasjfl kslkdfjlks'},
      {title: 'Note5 title', content: 'aksdlfjalsdjflkasjfl kslkdfjlks'},
      {title: 'Note6 title', content: 'aksdlfjalsdjflkasjfl kslkdfjlks'},
      {title: 'Note7 title', content: 'aksdlfjalsdjflkasjfl kslkdfjlks'},
      {title: 'Note8 title', content: 'aksdlfjalsdjflkasjfl kslkdfjlks'},
    ],
  }
  render() {
    return (
      <div className="App">
        <Sidebar />
        <div className="Notes-Container">
          <h2>Your Notes: </h2>
          {this.state.notes.map((note, index) => <NotesList id={index} note={note}/>)}
        </div>
      </div>
    );
  }
}

export default App;
