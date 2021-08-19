import React from "react";

import "./SettingStyle.scss";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Header from "components/Headers/Header";
//import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import {
    TabContent,
    Container,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Card,
    Button,
    CardTitle,
    CardText,
    Row,
    Col,
} from "reactstrap";

import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            style={{
                backgroundColor: "white",
                height: "400px",
            }}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

        //backgroundColor: theme.palette.background.paper,
    },
}));

export default function Settings() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

const BlueRoyaleColor ={ color: "royalblue",}

    return (
        <>
            <Header />

            <Container className="mt--7" fluid>
                {/*className={classes.root}*/}
                <div>
                    <AppBar
                        //todo: find how to change the bottom border selected element
                        position="static"
                        style={{
                            backgroundColor: "white",
                            color: "royalblue",
                            //       '&:before': {
                            //     borderColor: "blue",
                            // },
                            // '&:after': {
                            //     borderColor: "green",
                            // },
                        }}
                    >
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="Settings Tab"
                        >
                            <Tab label="SITE INFO" />
                            <Tab label="GENERAL SETTINGS" />
                            <Tab label="SOCIAL LINKS" />
                            {/* <Tab label="API SETTINGS" {...a11yProps(3)} /> */}
                            <Tab label="API SETTINGS" />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0}>
                        <div>
                            <h1 style={BlueRoyaleColor}>Website Information</h1>

                            <FormSetting1 />

                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                    <h1 style={BlueRoyaleColor}>Website Information</h1>


                        <FormSetting2 />

                    </TabPanel>
                    <TabPanel value={value} index={2}>
                    <h1 style={BlueRoyaleColor}>Website Information</h1>


                        <FormSetting3 />

                    </TabPanel>

                    <TabPanel value={value} index={3}>
                    <h1 style={BlueRoyaleColor}>Website Information</h1>

                        <FormSetting4 />

                    </TabPanel>
                </div>
            </Container>
        </>
    );
}
// https://material-ui.com/components/text-fields/
// https://reactstrap.github.io/components/tabs/

const styleNoWrap ={
    whiteSpace: "nowrap",
    fontWeight: "bold",
}
const stylebtnSubmit ={
    backgroundColor: "#547dde",
width: "100px",
marginBottom: "100px",
color: "#f0f0f0",

}
const FormSetting1 = () => {
    return (
        <>



            <Form>
                <Row form>
                    <Col md={4}>
                        <FormGroup >
                            <Label for="SiteName" sm={2} style={styleNoWrap}>
                                Site Name
                            </Label>

                            <Input
                                type="text"
                                name="siteName"
                                // id="exampleEmail"
                                placeholder="TokenLite"
                            />

                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup >
                            <Label for="SiteEmail" sm={2} style={styleNoWrap}>
                                Site Email
                            </Label>

                            <Input
                                type="text"
                                name="SiteEmail"
                                // id="exampleEmail"
                                placeholder="info@yourdomain.com"
                            />
                            <FormText>Using for contacts and sending mail .</FormText>
                        </FormGroup>
                        
                        
                    </Col>
                    <Col md={4}>
                        <FormGroup >
                            <Label for="SiteCopyright" sm={2} style={styleNoWrap}>
                                Site Copyright
                            </Label>

                            <Input
                                type="text"
                                name="siteCopyright"
                                //   id="exampleEmail"
                                placeholder="All rights are reserved"
                            />
                            <FormText>Copyright text for site.</FormText>

                        </FormGroup>
                    </Col>
                </Row>
{/* //SecondRow */}
                <Row form>
                    <Col md={4}>
                        <FormGroup >
                            <Label for="contactAdress" sm={2} style={styleNoWrap}>
                                Contact Adress
                            </Label>

                            <Input
                                type="text"
                                name="contactAdress"
                                id="contactAdress"
                            
                            />
                            <FormText>Enter the Support Adress</FormText>
                        </FormGroup>
                    </Col>
                    
                    
                    <Col md={4}>
                        <FormGroup >
                            <Label for="contactPhone" sm={2} style={styleNoWrap}>
                                Contact Phone
                            </Label>

                            <Input
                                type="text"
                                name="contactPhone"
                                id="contactPhone"
                            
                            />
                            <FormText>Using for Contact and Support</FormText>
                        </FormGroup>
                    </Col>
                        

                    <Col md={4}>
                        <FormGroup >
                            <Label for="supportEmail" sm={2} style={styleNoWrap}>
                                Contact Adress
                            </Label>

                            <Input
                                type="text"
                                name="supportEmail"
                                id="supportEmail"
                            
                            />
                            <FormText>Enter the Support Adress</FormText>
                        </FormGroup>
                    </Col>
                   
                </Row>

                <Button style={stylebtnSubmit
                } >  <i class="fas fa-sync"></i>Submit</Button>
            </Form>

        </>
    );

};

const FormSetting2 = () => {
    return (
        <>

            <Form>
                <Row form>
                    <Col md={4}>
                        <FormGroup >
                            <Label for="timezone" sm={2} style={styleNoWrap}>
                                Time Zone
                            </Label>

                            
                            <select class="form-select" aria-label="Default select example" style={{
                                height: "calc(1.5em + 1.25rem - 2px)",
                            }}>
  <option selected>(UTC + 00:00)UTC</option>
  <option value="1">(UTC + 01:00)UTC</option>
  <option value="2">(UTC + 02:00)UTC</option>
  <option value="3">(UTC + 03:00)UTC</option>
</select>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup >
                            <Label for="timezone" sm={2} style={styleNoWrap}>
                                Time Zone
                            </Label>
                            <select class="form-select" aria-label="Default select example" style={{
                                height: "calc(1.5em + 1.25rem - 2px)",
                                                        }}>
                            <option selected>6 Apr, 2019</option>
                            <option value="1">6 Apr, 2019</option>
                            <option value="2">6 Apr, 2019</option>
                            <option value="3">6 Apr, 2019</option>
                            </select>
                        </FormGroup>
                    </Col>
                   
                    <Col md={4}>
                        <FormGroup >
                            <Label for="timeformat" sm={2} style={styleNoWrap}>
                                Time Format
                            </Label>
                            <select class="form-select" aria-label="Default select example" style={{
                                height: "calc(1.5em + 1.25rem - 2px)",
                                                        }}>
                            <option selected>12:00 AM</option>
                            <option value="1">12:00</option>
                            </select>
                        </FormGroup>
                    </Col>
                   
                </Row>

                <Row form>
                    <Col md={6}>
                        <FormGroup >
                            <Label for="mainSiteURL" sm={2} style={styleNoWrap}>
                            Main Site URL
                            </Label>

                            <Input
                                type="text"
                                name="mainSiteURL"
                                id="mainSiteURL"
                                // placeholder="with a placeholder"
                            />
                            <FormText>Set your main website url</FormText>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup >
                            <Label for="UserPTHM" sm={2} style={styleNoWrap}>
                                User Panel Theme
                            </Label>
                            <select class="form-select" aria-label="Default select example" style={{
                                height: "calc(1.5em + 1.25rem - 2px)",
                                                        }}>
                            <option selected>Default</option>
                            <option value="1">Manual</option>
                            </select>
                        </FormGroup>
                    </Col>

                    <Col md={2}>
                        <FormGroup >
                            <Label for="timeformat" sm={2} style={styleNoWrap}>
                                Maintenace Mode
                            </Label>
                            {/* <input type="checkbox" checked data-toggle="toggle" data-style="ios" /> */}

                            <div class="toggleWrapper">
                            <input type="checkbox" name="toggle1" class="mobileToggle" id="toggle1" checked />
                            <label for="toggle1"></label>
                            </div>
                            
                        </FormGroup>
                    </Col>

                </Row>
                <Button>Submit</Button>
            </Form>

        </>
    );

};
const FormSetting3 = () => {
    return (
        <>

            <Form>
                <Row form>
                    <Col md={6}>
                        <FormGroup >
                            <Label for="exampleEmail" sm={2}>
                                Email
                            </Label>

                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="with a placeholder"
                            />

                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup >
                            <Label for="exampleEmail" sm={2}>
                                Email
                            </Label>

                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="with a placeholder"
                            />

                        </FormGroup>
                    </Col>
                </Row>

                <Row form>
                    <Col md={6}>
                        <FormGroup >
                            <Label for="exampleEmail" sm={2}>
                                Email
                            </Label>

                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="with a placeholder"
                            />

                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup >
                            <Label for="exampleEmail" sm={2}>
                                Email
                            </Label>

                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="with a placeholder"
                            />

                        </FormGroup>
                    </Col>
                </Row>
                <Button>Submit</Button>
            </Form>

        </>
    );

};
const FormSetting4 = () => {
    return (
        <>

            <Form>
                <Row form>
                    <Col md={4}>
                        <FormGroup >
                            <Label for="exampleEmail" sm={2}>
                                Email
                            </Label>

                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="with a placeholder"
                            />

                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup >
                            <Label for="exampleEmail" sm={2}>
                                Email
                            </Label>

                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="with a placeholder"
                            />

                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup >
                            <Label for="exampleEmail" sm={2}>
                                Email
                            </Label>

                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="with a placeholder"
                            />

                        </FormGroup>
                    </Col>
                </Row>

                <Row form>
                    <Col md={6}>
                        <FormGroup >
                            <Label for="exampleEmail" sm={2}>
                                Email
                            </Label>

                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="with a placeholder"
                            />

                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup >
                            <Label for="exampleEmail" sm={2}>
                                Email
                            </Label>

                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="with a placeholder"
                            />

                        </FormGroup>
                    </Col>
                </Row>
                <Button>Submit</Button>
            </Form>

        </>
    );

};
