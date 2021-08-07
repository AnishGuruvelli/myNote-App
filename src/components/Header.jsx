import React from "react";
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

function Header() {
  return (
    <header>
      <h1>
        <FormatListBulletedIcon />
        myNote
      </h1>
      <p>One Place For All Your Notes.</p>
    </header>
  );
}

export default Header;
