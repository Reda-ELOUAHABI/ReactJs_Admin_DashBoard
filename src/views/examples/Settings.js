import React from "react";

import "./SettingStyle.scss"

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Header from "components/Headers/Header";
//import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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
        height: "100px",
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

  return (
    <div>
      <Container className="mt--7" fluid>
        <Header />

        {/*className={classes.root}*/}
        <div>
          <AppBar
        
        //todo: find how to change the bottom border selected element
            position="static"
            style={{
              backgroundColor: "white",
              color: "royalblue",
              '&:before': {
            borderColor: "blue",
        },
        '&:after': {
            borderColor: "green",
        },


       
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
<h1>Website Information</h1>

<form className={classes.root} noValidate autoComplete="off">
  <TextField id="standard-basic" label="Standard" />
  <TextField id="filled-basic" label="Filled" variant="filled" />
  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
</form>

            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>

          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
        </div>
      </Container>
    </div>
  );
}
// https://material-ui.com/components/text-fields/
// https://reactstrap.github.io/components/tabs/