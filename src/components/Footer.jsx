import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}, <b color="3ec8da">myNote</b> by <b>Anish Guruvelli.</b></p>
    </footer>
  );
}

export default Footer;
