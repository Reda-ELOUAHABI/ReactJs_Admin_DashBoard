import React from 'react'
import profile from "../../assets/My-Images/profile.png";
// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import "./blue_Card_style.scss";
function BlueCards() {
    return (
        <div>
            <li className="caardblue">
       <div className="txtBlueCard">
           <h1>
               Sales
           </h1>
           <h2>
               0.00
           </h2>
       </div>
   
      </li>
        </div>
    )
}

export default BlueCards
