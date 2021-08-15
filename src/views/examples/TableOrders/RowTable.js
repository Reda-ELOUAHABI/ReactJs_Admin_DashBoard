import React from "react";

// reactstrap components
// import { Card, Container, Row } from "reactstrap";

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
function RowTable(props) {
  return (
    <tr>
      <th>
        <label className="container1">
          <input type="checkbox" />
          <span class="checkmark"></span>{" "}
        </label>
      </th>
      <th scope="row">
        <Media className="align-items-center">
          <a
            className="avatar  mr-3"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
            style={{
              borderRadius: "7px ",
              border: "1px ridge rgba(149, 143, 151, 0.6)",
              backgroundColor: "transparent",
            }}
          >
            <img
              alt="..."
              src={require("../../../assets/My-Images/profile.jpg").default}
            />
          </a>
          <Media>
            <span
              className="mb-0 text-sm"
              style={{ 
                
               // color: "blue",
                
                paddingRight: "5px" }}
            >
              Lorem Lipsum
            </span>
          </Media>
        </Media>
      </th>
      <td>
        <span style={{ color: "blue", paddingRight: "5px" }}> 2 </span> in stock
        for variant
      </td>
      <td> 12 </td>
      <th> 17.4.2021 </th>
      <th>
        <div
          style={{
            backgroundColor: 
            props.status=="active" ?
              "rgb(236, 236, 255)" :
                  props.status=="pending" ?
                      "rgb(245, 226, 198)" : "rgb(235, 161, 150)" ,
           // height: "auto",
           // width: "60px",
           // position: "relative",
            top: "0px",
            left: "0px",
            fontSize: "10px",
            borderRadius: "90px",
            textAlign: "center",
            color:
            props.status=="active" ?
            "royalblue" :
                  props.status=="pending" ?
                      "rgb(255, 184, 5)" : "rgb(245, 88, 56)" ,
            
          }}
          className="activeDiv"
        >
          {props.status}
        </div>
      </th>

      <th>
        <a style={{
          textAlignP: "center" ,
          fontSize : "30px"       }}>
        <i class="fas fa-ellipsis-h" ></i>
        </a>
      </th>
    </tr>
  );
}

export default RowTable;
