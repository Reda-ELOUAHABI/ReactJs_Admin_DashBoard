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
    return (
        <div>
            <li className="caard">
                <a
                    className="caard-image"
                    href="/#"
                    target="_blank"
                ></a><p>hello</p>
            </li>
            
        </div>
    );
}

export default Caard;
