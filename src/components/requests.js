import React, {
  Component
} from "react";
import '../stylesheets/requests.css';
import {
  Button
} from 'semantic-ui-react'

class Requests extends Component {
  render() {
    return ( <
      div className = "Component" >
      <form class = "ui form" >
      < div class = "field" >
      < label > Abstract < /label>
      < textarea class="textarearerquests" rows = {20} >
      <  /textarea>
      < Button type = "submit" class = "button" > Submit < /Button>
      </div>
      </form>
       < /div>
    );
  }
}

export default Requests
