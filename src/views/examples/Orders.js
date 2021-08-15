import React, { useState } from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
// core components
import Header from "components/Headers/Header.js";
import TableOrders from "./TableOrders/Table";

const Orders = () => {
  const [copiedText, setCopiedText] = useState();
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        {/* <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Orders</h3>
              </CardHeader>
              
              
            </Card>
          </div>
        </Row>
         */}

         
         <div style={{
           padding: "30px",
           backgroundColor: "white"
         }}>
                <div>
                  {/* <div class="row d-flex justify-content-between mx-auto mt-4 mb-3"> */}
                  <div id="Filter-Serach">
                    {/* <div class="col-lg-8 col-md-12"> */}
                    <div class="row justify-content-end">
                      <i
                        class="fa fa-search"
                        id="iconSearch"
                        aria-hidden="true"
                      ></i>
                      <div class="input-group col-lg-10 col-md-12 SearchProducts">
                      

                        <div class="input-group-prepend ">
                          {/* <i class="fa fa-search" aria-hidden="true" ></i> */}
                          <input
                            class="form-control"
                            id="search-box"
                            type="text"
                            name="search"
                            placeholder="Search Products "
                            required="required"
                          />
                        </div>

                        <div class="input-group-append">
                          <select
                            class="form-control rounded-0 text-capitalize"
                            id="search-filter"
                            name="search-filter"
                          >
                            <option value="listitem">All Dates</option>
                            <option value="Type">date1</option>
                            <option value="Vendor">Date2</option>
                          </select>
                        </div>
                        <div class="input-group-append">
                          <select
                            class="form-control rounded-0 text-capitalize"
                            id="search-filter"
                            name="search-filter"
                          >
                            <option value="listitem">Status</option>
                            <option value="Type">Status1</option>
                            <option value="Vendor">Status2</option>
                          </select>
                        </div>
                      </div> 
                      <br></br><br></br><br></br>
                      <TableOrders />
                    </div>
                  </div>
                </div>

               
              </div>
             
          

          {/* Pagination */}
          <div 
          style={{
            position: "relative",
            left: "540px",
          }}
          >
              
          <Pagination aria-label="Page navigation example">
      <PaginationItem disabled>
        <PaginationLink first href="#" />
      </PaginationItem>
      <PaginationItem disabled>
        <PaginationLink previous href="#" />
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink href="#">
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          4
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          5
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last href="#" />
      </PaginationItem>
    </Pagination>


          </div>



         

      </Container>
    </>
  );
};

export default Orders;
