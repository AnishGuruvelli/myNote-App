import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
// these are floating action buttons : https://material-ui.com/components/floating-action-button/
import Zoom from '@material-ui/core/Zoom';
// https://material-ui.com/api/zoom/#zoom-api


function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
      {/* {isExpanded ? 
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> : null
      } */}
      {/* or u can also do this */}
      {isExpanded &&
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
      }
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
