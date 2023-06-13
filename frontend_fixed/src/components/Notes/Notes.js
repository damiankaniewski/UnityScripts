import React from "react";
import Note from './Note/Note'
import NewNote from "./NewNote/NewNote";
import './Notes.css';
import Modal from 'react-modal';
import EditNote from "./EditNote/EditNote";
import axios from '../../axios';
import {NotificationContainer,NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class Notes extends React.Component {
    constructor(props){

        super(props);

        this.state = {
            notes : [],
            showEditModal: false,
            editNote: {}
        }
    }

    componentDidMount(){
        this.fetchNotes();
    }
    
    async fetchNotes(){
        const res = await axios.get('/notes');
        const notes = res.data.reverse();

        this.setState({notes});
    }

    async deleteNote(id){
        const notes = [...this.state.notes].filter(note => note._id !== id);

        await axios.delete('/notes/' + id)
        this.setState({ notes });
    }
    
    async addNote(note) {
        try {
          const res = await axios.post('/notes', note);
          const newNote = res.data;
          const notes = [newNote, ...this.state.notes];
      
          this.setState({ notes });
        } catch (err) {
            NotificationManager.error(err.response.data.message);
        }
      }
      

    async editNote(note){

        try{
            await axios.put('/notes/' + note._id, note)

            const notes = [...this.state.notes];
            const index = notes.findIndex(x => x._id === note._id);
            if(index>= 0){
                notes[index] = note;
                this.setState({ notes });
            }
            this.toggleModal();
        }catch(err){
            NotificationManager.error(err.response.data.message);
        }
    }
    
    toggleModal(){
        this.setState({showEditModal: !this.state.showEditModal});
    }

    editNoteHandler(note){
        this.toggleModal();
        this.setState({editNote: note})
    }

    render(){


        return (
            <div className="main">
                <NotificationContainer />
                <NewNote onAdd={(note) => this.addNote(note)}/>

                <Modal className="editModal" isOpen={this.state.showEditModal} contentLabel="Edit script" >
                    <EditNote
                    title={this.state.editNote.title}
                    body={this.state.editNote.body}
                    _id={this.state.editNote._id}
                    onEdit={note => this.editNote(note)}/>
                    <button className="cancel" onClick={() => this.toggleModal()}>Cancel</button>

                </Modal>
                <div>
                {this.state.notes.map(note => (
                    <Note 
                        key={note._id}
                        title={note.title} 
                        body={note.body}
                        _id={note._id} 
                        onEdit={() => this.editNoteHandler(note)}
                        onDelete={(id) => this.deleteNote(note._id)}/>
                ))}
                </div>
                
            </div>
        );
        
    }
}

export default Notes;