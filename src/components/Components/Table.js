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

//https://codepen.io/chryss/pen/rbZxwa : just search filter on opencode

//todo: change also those titles format
function TableProducts() {
  return (
    <div>
      <Table className="align-items-center table-flush" responsive>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th scope="col"><h1>
              Products <i class="fas fa-sort-down"></i>
            </h1>
   </th>
            <th scope="col"><h1>Inverntory</h1></th>
            <th scope="col"><h1>Type</h1></th>
            <th scope="col"><h1>Vendor</h1></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              {/* add style to checkbox   https://stackoverflow.com/questions/4148499/how-to-style-a-checkbox-using-css
               */}
              <input type="checkbox" />{" "}
            </th>
            <th scope="row">
              <Media className="align-items-center">
                <a
                  className="avatar rounded-circle mr-3"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  style={{ borderRadius: "10% !important" }}
                >
                  <img
                    alt="..."
                    src={require("../../assets/My-Images/imac.jpg").default}
                  />
                </a>
                <Media>
                  <span
                    className="mb-0 text-sm"
                    style={{ color: "blue", paddingRight: "5px" }}
                  >
                    IMac Pro 500GB
                  </span>
                </Media>
              </Media>
            </th>
            <td>
              <span style={{ color: "blue", paddingRight: "5px" }}> 2 </span> in
              stock for variant
            </td>
            <td> Desktop </td>
            <td> Apple </td>
          </tr>

          <tr>
            <th>
              <input type="checkbox" />{" "}
            </th>
            <th scope="row">
              <Media className="align-items-center">
                <a
                  className="avatar rounded-circle mr-3"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  style={{ borderRadius: "10% !important" }}
                >
                  <img
                    alt="..."
                    src={require("../../assets/My-Images/imac.jpg").default}
                  />
                </a>
                <Media>
                  <span
                    className="mb-0 text-sm"
                    style={{ color: "blue", paddingRight: "5px" }}
                  >
                    IMac Pro 500GB
                  </span>
                </Media>
              </Media>
            </th>
            <td>
              <span style={{ color: "blue", paddingRight: "5px" }}> 2 </span> in
              stock for variant
            </td>
            <td> Desktop </td>
            <td> Apple </td>
          </tr>

          <tr>
            <th>
              <input type="checkbox" />{" "}
            </th>
            <th scope="row">
              <Media className="align-items-center">
                <a
                  className="avatar rounded-circle mr-3"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  style={{ borderRadius: "10% !important" }}
                >
                  <img
                    alt="..."
                    src={require("../../assets/My-Images/imac.jpg").default}
                  />
                </a>
                <Media>
                  <span
                    className="mb-0 text-sm"
                    style={{ color: "blue", paddingRight: "5px" }}
                  >
                    IMac Pro 500GB
                  </span>
                </Media>
              </Media>
            </th>
            <td>
              <span style={{ color: "blue", paddingRight: "5px" }}> 2 </span> in
              stock for variant
            </td>
            <td> Desktop </td>
            <td> Apple </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default TableProducts;
