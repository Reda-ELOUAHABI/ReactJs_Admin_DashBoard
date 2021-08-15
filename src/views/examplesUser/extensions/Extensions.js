import React from "react";
// reactstrap components

// core components

import "../../examplesUser/extensions/ExtensionsStyle.scss";

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
import Cards from "./Cards";
import CardsExtension from "./Cards";

//import Image "../..";
const Extensions = () => {
  const imgURL =
    "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg";
  return (
    <>
      <Header />

      {/* Page content */}
      <Container className="mt--7" fluid>
        <button
          style={{
            marginBottom: "10px",
          }}
          className="AddExtensionBTN"
        >
          {" "}
          <i class="fas fa-plus"></i> Add Products
        </button>
        <div class="centered">
          <section class="cards">
            <CardsExtension imgURL={imgURL} />
            <CardsExtension imgURL={imgURL} />
            <CardsExtension imgURL={imgURL} />
            <CardsExtension imgURL={imgURL} />
            <CardsExtension imgURL={imgURL} />
            <CardsExtension imgURL={imgURL} />
            <CardsExtension imgURL={imgURL} />
            <CardsExtension imgURL={imgURL} />
            <CardsExtension imgURL={imgURL} />
          </section>
        </div>

        {/* Table */}
        {/* <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Card Extensions User</h3>
              </CardHeader>
            </Card>
          </div>
        </Row> */}
        <br />
        <div
          style={{
            margin: "100px",
          }}
        ></div>
      </Container>
    </>
  );
};

export default Extensions;