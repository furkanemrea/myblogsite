import React, { Component } from "react";
import "../../src/App.css";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import NavigationIcon from  "@material-ui/icons/Navigation"

class ModalPage extends Component {
  render() {
    return (
      <div>
        <div
          id="Bilgisol"
          style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
        >
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
          Sosyal Medya
        </div>
        <div
          id="Bilgi"
          style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
        >
          <Fab variant="extended">
            <NavigationIcon  />
            Yukarı Çık
          </Fab>
        </div>
      </div>
    );
  }
}
export default ModalPage;
