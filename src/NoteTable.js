import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { NoteForm } from "./NoteForm/NoteForm";

export const NoteTable = ({ notes, updateNote, deleteNote }) => {
  return (
    <Table bordered striped>
      <thead>
        <tr>
          <th>Title</th>
          <th>Details</th>
          <th>Priority</th>
          <th>Status</th>
          <th>Created</th>
          <th>Updated</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {notes && notes.map((note, i) => {
          return (
            <tr key={i}>
              <td>{note.title}</td>
              <td>{note.desc}</td>
              <td>{note.priority}</td>
              <td>{note.status}</td>
              <td>{note.createdAt}</td>
              <td>{note.updatedAt}</td>
              <td>
                <NoteForm submitNote={updateNote} defaultNote={note} label={"Update"} />
                <Button variant="outline-danger" onClick={() => deleteNote(note.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
