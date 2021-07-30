import React from "react";
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
import "./card_style.scss";
function Caard() {
  const imageCard =
    "https://image.freepik.com/free-vector/gradient-network-connection-background_23-2148865392.jpg";
  return (
    <div>
      <li className="caard">
        <div>
          <i class="iconHeart fas fa-heart"></i>
          <div className="CercleImg">
            <img
              className="ImageCard 
                                        avatar 
                                        "
              src={imageCard}
              alt="hello"
            />
          </div>
        </div>
        <div>
          <h3>iMac 27</h3>
          <p>2019</p>
          <div>
            <div className="hr"></div>

            <div  class="button w3-rest w3-white">
                 <button>View Details</button>
            </div>
           
          </div>
        </div>
      </li>
    </div>
  );
}

export default Caard;
