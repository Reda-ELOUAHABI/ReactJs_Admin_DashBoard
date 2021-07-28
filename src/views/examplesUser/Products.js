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

// core components
import Header from "components/Headers/Header.js";
import TableProducts from "components/Components/Table";
import "./styleProductsUser.css"
const MapWrapper = () => {
  return (
    <>
      <div className="map-canvas">
        <h1> Products Page User</h1>
      </div>
    </>
  );
};

const Products = () => {
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <h3 className="mb-0">Products</h3>
            <p>
              <i class="fas fa-long-arrow-alt-down"></i> import{" "}
              <i class="fas fa-long-arrow-alt-up"></i> export More Actions{" "}
              <i class="fas fa-sort-down"></i>
            </p>
            <button className="AddProductBTN"
            >
              {" "}
              Add Products
            </button>
            <Card className="shadow">
              <h1 className="ALL"
              >ALL </h1>
              <hr />
              <div class="container small my-5">
                <div class="row d-flex justify-content-between mx-auto mt-4 mb-3">
                  <div class="col-lg-8 col-md-12">
                    <div class="row justify-content-end">
                      <div class="input-group col-lg-10 col-md-12 SearchProducts">
                        <div class="input-group-append">
                          <select
                            class="form-control rounded-0 text-capitalize"
                            id="search-filter"
                            name="search-filter"
                          >
                            <option value="listitem">Filter</option>
                            <option value="Type">Type</option>
                            <option value="Vendor">Vendor</option>
                          </select>
                        </div>
                        <div class="input-group-prepend ">
                          <i class="fa fa-search" aria-hidden="true" ></i>
                        <input
                          class="form-control"
                          id="search-box"
                          type="text"
                          name="search"
                          placeholder="Search Products "
                          required="required"
                        />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* TableProducts */}
              <TableProducts />
              <CardFooter className="py-4">
                {/* <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              */}
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Products;
