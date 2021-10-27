import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import NoteList from "./NoteList";
import axios from "axios";

const Mypage_memo = () => {
  axios
    .post("http://localhost:5000/api/memos/write", {
      memo_text: "test memo 제발 되길",
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "나의 첫 공부 메모!",
      date: "2011.01.15",
    },
    {
      id: nanoid(),
      text: "나의 두번 째 공부 메모!",
      date: "2020.10.15",
    },
    {
      id: nanoid(),
      text: "나의 세번 째 공부 메모!",
      date: "2021.01.22",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className='container'>
      <NoteList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default Mypage_memo;
