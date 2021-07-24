import React from "react";

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
import "./style.scss";
//import Image "../..";
const Analytics = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        {/* <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Card Analytics User</h3>
              </CardHeader>
            </Card>
          </div>
        </Row> */}

        <ul className="caard-list">
          <li className="caard caard1">
            <a
              className="caard-image"
              href="/#"
              target="_blank"
              style={{
                backgroundImage:
                  "url(" +
                  "https://image.freepik.com/free-vector/gradient-network-connection-background_23-2148865392.jpg" +
                  ")",
                height: "444px ",
              }}
            >
              <img src="/#" alt="Psychopomp" />

              <h2>SET UP YOUR DOMAIN</h2>
              <p>
                Get lorem10 Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Morbi ultricies eu nulla vel dapibus.{" "}
              </p>
              <h3>SET UP YOUR DOMAIN</h3>
            </a>
          </li>

          <li class="caard caard2">
            <a
              class="caard-image"
              href="/#"
              target="_blank"
              style={{
                backgroundImage:
                  "url(" +
                  "https://image.freepik.com/free-vector/global-network-futuristic-technology_53876-97389.jpg" +
                  ")",
               // height: "70px",
                top: "0",
                backgroundSize: "800px",
                backgroundRepeat: "no-repeat",
                height: "10px"
              }}
            >

            </a>
            <a class="caard-description" href="/#" target="_blank"
            style={{
              height: "187px"
            }}>
              <h2>Customise your own design</h2>
              <p 
              style={{ color: "black"  }}
              >
                Choose your own lqn akjna akna kann s aokqk aqkqk kqkna nso
              </p>
              <h3>Store Design</h3>
            </a>
          </li>

          <li class="caard caard3">
            <a
              class="caard-image3 image_profile"
              href="/#"
              target="_blank"
              style={{
                backgroundImage:
                  "url(" +
                  "https://image.freepik.com/free-photo/medium-shot-happy-man-smiling_23-2148221808.jpg" +
                  ")",
               // height: "70px",
                top: "0",
                backgroundSize: "200px",
                backgroundRepeat: "no-repeat",
                height: "10px"
              }}
            >

            </a>
            <a class="caard-description" href="/#" target="_blank"
            style={{
              height: "187px"
            }}>
              <h2>Customise your own design</h2>
              <p 
              style={{ color: "black"  }}
              >
                Choose your own lqn akjna akna kann s aokqk aqkqk kqkna nso
              </p>
              <h3>Store Design</h3>
            </a>
          </li>
        </ul>
      </Container>
    </>
  );
};

export default Analytics;
