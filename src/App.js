import "./sass/App.scss";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { uid } from "uid";
import { NoteTable } from "./NoteTable";
import { NoteForm } from "./NoteForm/NoteForm";
import { addNote as createNote } from "./api";
import { Toast } from "./Common/Toast";

export const App = () => {
  const [notes, setNotes] = useState([]);
  const [toastConfig, setToastConfig] = useState({ show: false });

  const addNote = async (newNote) => {
    try {
      const note = await createNote(newNote);
      setNotes([...notes, note]);
    } catch (error) {
      setToastConfig({
        show: true,
        variant: "danger",
        title: "Error",
        message: "Couldn't add new note due to " + error,
        onClose: () => {},
      });
      setTimeout(() => {
        setToastConfig({ show: false });
      }, 5 * 1000);
    }
  };

  const updateNote = (updatedNote) => {
    const newNotes = notes.map((x) => {
      if (x.id === updatedNote.id) {
        x = updatedNote;
      }
      return x;
    });

    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    setNotes(
      notes.filter((note) => {
        return note.id !== id;
      })
    );
  };
  return (
    <div className="container-xxl bd-gutter mt-3 my-md-4 bd-layout">
      <NoteForm submitNote={addNote} label={"Add Note"} />
      <Toast {...toastConfig} />
      <br />
      <NoteTable notes={notes} updateNote={updateNote} deleteNote={deleteNote} />
    </div>
  );
};
