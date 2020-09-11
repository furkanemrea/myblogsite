import React, { Component } from "react";
import "../../src/App.css";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import ModalDetailsPage from './ModalDetailsPage'

class ModalPage extends Component {
  constructor(){
    super();
    this.state={
      modalShow:false,
    }
    
  }
  render() {
    let modalClose=()=>this.setState({modalShow:false});
    return (
      <div >
        <div
          id="Bilgisol"
          style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
        >
          <Fab color="primary" aria-label="add" onClick={()=>this.setState({modalShow:true})}>
            <AddIcon />
          </Fab>
          Sosyal Medya
        </div>
        <ModalDetailsPage show={this.state.modalShow} onHide={modalClose}/>
      </div>
    );
  }
}
export default ModalPage;
