import React from "react";
// import { Card } from "reactstrap";
// import profile from "../../../assets/My-Images/profile.png";
// import caard_list_obj from "./ProfilecteStyles"; 
// import { caard_obj } from "./ProfilecteStyles";
import './ProfileStyle.scss'

function Profile() {

  const divStyle = {
    marginLeft: "10px",
    marginRight: "10px",
    fontWeight: "700",
  
  }

  const pstyle = {
    marginLeft: "10px",
    marginRight: "10px",
    fontWeight: "700",
  
  }

  return (
    <div>
      {/* <AdminNavbar /> */}
      {/* <img /> */}
      <div
        style={{
          height: "203px",
          // backgroundColor: "transparent"
        }}
      ></div>

      {/* The Real Profile Page Design */}

      <div>
        <div
          style={{
            marginLeft: "40px",
            display: "flex",
          }}
        >
<div style={{
              height: "20px",
              minWidth: "50px",
              borderRadius: "50%",
            }}>
  <img
            style={{
              height: "70px",
              minWidth: "50px",
              borderRadius: "50%",
            }}
            alt="..."
            //user profile img hosted
            src="
                       https://i.ibb.co/zNBr3SD/Screenshot-2021-07-14-234407.png
                      "
          />

<div
            style={{
               position: "relative",
              top: "-30px",
              height: "30px",
              minWidth: "40px",
              borderRadius: " 0 0 150px 150px",
              // for opacity , I use the rgba
              backgroundColor: "rgba(57, 72, 204,.5)",
            }}
          >
            <a href="#/"
            style={{
              paddingLeft: "10px",
              textAlign: "center",
              opacity: "1",
              color: "white",
            }}
            >
              <i class="fas fa-pen"></i> Edit
            </a>
          </div>

       
</div>
          <div style={{width: "30px"}}>

          </div>
         {/* </span> */}

          <div>
            <h2>Mohamed Maymoun</h2>

            <p>
            <span style={{color: "black" , fontWeight: "400"}}>
              Harnes The Power Of your Dream
              </span>
              <br></br>
              johnsmith@gmail.com
            </p>
          </div>
        </div>


        <hr style={{
          marginTop:  "-20px",
          height: "0.1px"
        }}
          />

<div style={{
  display: "flex",
  marginLeft: "50px"
}}>

<div style={divStyle}>
  <p  style={pstyle}>
    20 <br/>
    Stores
  </p>
</div>

<div style={divStyle}>
  <p  style={pstyle}>
    20 <br/>
    Purchases
  </p>
</div>

<div style={divStyle}>
  <p  style={pstyle}>
    20 <br/>
    Customers
  </p>
</div>

<div style={divStyle}>
  <p  style={pstyle}>
    20 <br/>
    Users
  </p>
</div>

<div style={divStyle}>
  <p  style={pstyle}>
    20 <br/>
    Followers
  </p>
</div>



<div style={{
  width: "400px"
}}>

</div>
{/* Button */}
<div>
  <button  style={{marginBottom: "10px",
    // position: 'relative',
  // bottom: '60px',
  // left: '920px',
  borderRadius: '7px',
  border: 'none',
  backgroundColor: '#d9d9d9',
  color: 'white',
  width: '150px',
  height: '40px'
   }} > <i class="fas fa-plus-circle" style  = {{
     position: "static"
   }}></i> Create a Store</button>

</div>


</div>

<hr style={{
          marginTop:  "-20px",
          height: "1px"
        }}
          />
          

<div style={{display: "flex",
gap: "30px 30px",
alignContent: "center",
alignItems: "center",
//justifyContent: "center",
             marginLeft:"100px",
             marginBottom:"300px",

}}>

{/* Card 1 */}

<div className="card1 card-1" style={{
  display: "flex",
// gap: "30px 30px",
flexDirection: "column",
// alignContent: "center",
// alignItems: "center",
//justifyContent: "center",

}}>

<div style={{
  flex: "1"
}}>
  <img maxWidth="200px" height="78px" src="https://utiee.com/img/cms/about-us/1-about-utiee.jpg" alt="beautyWomen1" />
</div>

<div style={{
  display: "flex",


}}>
  <img style={{
  flex: "0.1"
}}  width="100px" Maxheight="35px" src="https://utiee.com/img/cms/about-us/1-about-utiee.jpg" alt="beautyWomen1" />
  <div style={{
    flex: "0.1",
    width: "20px"
  }}>

  </div>
  <img  style={{
  flex: "0.4"
}}  width="100px" Maxheight="35px"src="https://utiee.com/img/cms/about-us/1-about-utiee.jpg" alt="beautyWomen1" />



</div>
</div>
{/* Card 2 */}

<div>


</div>


{/* Card 3 */}

<div>


</div>

</div>













      </div>


    </div>
  );


}

export default Profile;
