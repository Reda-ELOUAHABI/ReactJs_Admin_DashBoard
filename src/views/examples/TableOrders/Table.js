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
import RowTable from "./RowTable";

//https://codepen.io/chryss/pen/rbZxwa : just search filter on opencode

//todo: change also those titles format
function TableOrders() {
  return (
    <div className="container">
      <Table className="table align-items-center table-flush" style={{
        backgroundColor: "white",
      }} responsive>
        <thead style={{
          backgroundColor: "#f8f9fe",
        }}>
          <tr>
            <th>
            <label className="container1">
                <input type="checkbox" />
                <span class="checkmark"></span>{" "}
              </label>
            </th>
            <th scope="col">
              <h4>
                Clients 
                {/* <i class="fas fa-sort-down"></i> */}
              </h4>
            </th>
            <th scope="col">
              <h4>Order</h4>
            </th>
            <th scope="col">
              <h4>Quantity</h4>
            </th>
            <th scope="col">
              <h4>Date</h4>
            </th>
            <th scope="col">
              <h4>Status</h4>
            </th>
            <th scope="col">
              <h4>Action</h4>
            </th>
          </tr>
        </thead>
        <tbody>
        <RowTable status="active"  />
        <RowTable status="active"  />
        <RowTable status="active"  />
        <RowTable  status="pending"  />
        <RowTable  status="active" />
        <RowTable status="Canceled" />

</tbody>
      </Table>
    </div>
  );
}

export default TableOrders;