import React from "react";

// reactstrap components
import { Card, Container, Row } from "reactstrap";

// core components
import Header from "components/Headers/Header.js";
import PaginationOrder from "./TableOrders/Pagination";
import TableProductsUser from "./TableProducts/Table";

const MapWrapper = () => {
  return (
    <>
      <div className="map-canvas">
        <h1> Products Page</h1>
      </div>
     
    </>
  );
};

const Products = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* <Row>
          <div className="col">
            <Card className="shadow border-0">
              <MapWrapper />
            </Card>
          </div>
        </Row> */}

          
        <div style={{
            paddingTop: "10px",
            backgroundColor: "white",
            borderRadius: "20px",
          }}>
                <div>
                  {/* <div class="row d-flex justify-content-between mx-auto mt-4 mb-3"> */}
                  <div id="Filter-Serach">
                    {/* <div class="col-lg-8 col-md-12"> */}
                    <div class="row justify-content-end">
                      <i
                        class="fa fa-search"
                        id="iconSearch4Orders"
                        aria-hidden="true"
                      ></i>
                      <div class="input-group col-lg-10 col-md-12 SearchProducts">
                      

                        <div class="input-group-prepend ">
                          {/* <i class="fa fa-search" aria-hidden="true" ></i> */}
                          <input
                            class="form-control"
                            id="search-box-orders"
                            type="text"
                            name="search"
                            placeholder="Search "
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
                        <div class="input-group-append statusBox">
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
                     
                     <TableProductsUser />
                    </div>
                  </div>
                </div>

               
              </div>
             
          
<br></br>
          {/* Pagination */}
              <PaginationOrder />

      </Container>
    </>
  );
};

export default Products;
