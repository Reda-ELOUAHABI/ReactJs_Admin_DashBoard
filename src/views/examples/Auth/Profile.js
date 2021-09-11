import AdminNavbar from "components/Navbars/AdminNavbar";
import React from "react";
import { Media } from "reactstrap";

function Profile() {
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
            // marginTop: "40px",
            display: "flex",
          }}
        >
          {/* <span className="avatar avatar-lg rounded-circle" */}


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
            // height="100"
            // width="100"
            alt="..."
            //user profile img hosted
            src="
                       https://i.ibb.co/zNBr3SD/Screenshot-2021-07-14-234407.png
                      
                      "
          //src="../../assets/My-Images/profile.png"
          />

<div
            style={{
               position: "relative",
              top: "-30px",
              // left: "70px",
              // opacity: "0.5",

              //

              // transform: "translate(50%, 50%)",
              height: "30px",
              minWidth: "40px",
              borderRadius: " 0 0 150px 150px",
              backgroundColor: "rgba(57, 72, 204,.5)",

              // Half Cercle
              // width: "100px",
              // height: "40px",
              // backgroundColor: "lightgreen",
              // borderBottomLeftRadius: "1110px",
              // borderBottomRightRadius: "1110px",
              // //border: "10px solid gray",
              // borderTop: "0",
              // //margin: "-10",
            }}
          >
            <a href="/"
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
              Harnes The Power Of your Dream
              <br></br>
              johnsmith@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="..."
                      //user profile img hosted
                      src="https://i.ibb.co/zNBr3SD/Screenshot-2021-07-14-234407.png"
                      //src="../../assets/My-Images/profile.png"
                    />
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold">
                      Mohammed Ali
                    </span>
                  </Media>
                  <i className="fas fa-sort-down" style={{}}></i>
                </Media>
         */}
    </div>
  );
}

export default Profile;
