import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Editor = ({
  classes,
  selectedNote,
  selectedNoteIndex,
  notes,
  noteUpdate,
}) => {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    setText(selectedNote.body);
    setTitle(selectedNote.title);
    setId(selectedNote.id);
  }, []);

  const update = debounce(() => {
    noteUpdate(id, {
      title,
      body: text,
    });
  }, 1500);

  const updateBody = (val) => {
    setText(val);
    update();
  };

  const updateTitle = (txt) => {
    setTitle(txt);
    update();
  };

  return (
    <div className={classes.editorContainer}>
      <BorderColorIcon className={classes.editIcon} />
      <input
        type="text"
        className={classes.titleInput}
        placeholder="Note title..."
        value={title ? title : ''}
        onChange={(e) => updateTitle(e.target.value)}
      />
      <ReactQuill value={text} onChange={updateBody} />
    </div>
  );
};

export default withStyles(styles)(Editor);
