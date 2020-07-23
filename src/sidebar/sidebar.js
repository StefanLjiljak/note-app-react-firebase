import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItem from '../sidebarItem/sidebarItem';

const Sidebar = ({
  notes,
  classes,
  selectedNoteIndex,
  selectNote,
  newNote,
  deleteNote,
}) => {
  const [addingNote, setAddingNote] = useState(false);
  const [title, setTitle] = useState(null);

  const newNoteBtnClick = () => {
    setTitle(null);
    setAddingNote(!addingNote);
  };

  const updateTitle = (txt) => {
    setTitle(txt);
  };

  const _newNote = () => {
    newNote(title);
    setTitle(null);
    setAddingNote(false);
  };

  const _selectNote = (n, i) => {
    selectNote(n, i);
  };

  const _deleteNote = (note) => {
    deleteNote(note);
  };

  if (notes) {
    return (
      <div className={classes.sidebarContainer}>
        <Button onClick={newNoteBtnClick} className={classes.newNoteBtn}>
          {addingNote ? 'Cancel' : 'New Note'}
        </Button>
        {addingNote ? (
          <div>
            <input
              type="text"
              className={classes.newNoteInput}
              placeholder="Enter note title"
              onKeyUp={(e) => updateTitle(e.target.value)}
            />
            <Button className={classes.newNoteSubmitBtn} onClick={_newNote}>
              Submit Note
            </Button>
          </div>
        ) : null}

        <List>
          {notes.map((_note, _index) => {
            return (
              <div key={_index}>
                <SidebarItem
                  _note={_note}
                  _index={_index}
                  selectedNoteIndex={selectedNoteIndex}
                  selectNote={_selectNote}
                  deleteNote={_deleteNote}
                ></SidebarItem>
                <Divider></Divider>
              </div>
            );
          })}
        </List>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default withStyles(styles)(Sidebar);
