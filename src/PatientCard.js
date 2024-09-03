import React from "react";
import {FaEllipsisV, FaPen, FaTrash} from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';

export default function PatientCard(props) {

    function clickHandler(event){
        console.log(event);
        document.getElementsByClassName()
    }
    function editHandler(event){
        
        console.log("editting");
        props.patientclicked(props.id,"edit")

    }
    function delHandler(event){
        console.log("pat deleting");
        props.patientclicked(props.id,"del")
    }

  return (
    <tr id={props.id}>
      <td>
        <div className="user-info">
          <div className="user-info__img">
            <img src={props.gender==="Male"? require("./img/prof.png" ): require("./img/female.jpeg" )} alt="User Img" />
          </div>
          <div className="user-info__basic">
            <h5 className="mb-0">{props.name}</h5>
            <p className="text-muted mb-0">{props.age} yrs, {props.gender}</p>
          </div>
        </div>
      </td>
      <td>
        <span className={props.stat==="Consult" ? "btn btn-success":"btn btn-primary"}>{props.stat}</span>
      </td>
      <td>
        <h6 className="mb-0">{props.time}</h6>
        <small>{props.date}</small>
      </td>
      <td>
        <h6 className="mb-0">{props.number}</h6>
        <a href="#!">
          <small>Contact</small>
        </a>
      </td>
      <td>
        <h6 className="mb-0">{props.docname}</h6>
      </td>
      <td>
        <Dropdown>
            <Dropdown.Toggle id="dropdown-custom-components" style={{backgroundColor: "white", color:"blueviolet", border: "none"}}>
                <FaEllipsisV/>
            </Dropdown.Toggle>

            <Dropdown.Menu>
            <Dropdown.Item eventKey="1" onClick={editHandler}><FaPen/> &nbsp; Edit</Dropdown.Item>
            <Dropdown.Item eventKey="2" onClick={delHandler}><FaTrash/> &nbsp; Delete</Dropdown.Item>
            </Dropdown.Menu>

        </Dropdown>
      </td>
    </tr>
  );
}
