import AdminNavbar from 'components/Navbars/AdminNavbar'
import React from 'react'
import { Media } from 'reactstrap'


function Profile() {
    return (
        <div>
        {/* <AdminNavbar /> */}
            {/* <img /> */}
<div style={
    {
        height: "203px",
       // backgroundColor: "transparent"
    }
}>

</div>


{/* The Real Profile Page Design */}

<div>

<div style={{
  display: "flex",
}}>


<span className="avatar avatar-lg rounded-circle" style={{
  height: "150px",
  width: "150px"
}}>
<img

// height="100"
// width="100"
                      alt="..."
                      //user profile img hosted
                      src="
                       https://i.ibb.co/zNBr3SD/Screenshot-2021-07-14-234407.png
                      
                      "
                      //src="../../assets/My-Images/profile.png"
                    />

                    </span>
                    <button> 
                    
                    </button>


<div>
               <h2>
                      Mohamed Maymoun
                    </h2>

                    <p>Harnes The Power Of your Dream 
                    <br></br> 
                    johnsmith@gmail.com</p>
                   
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
    )
}

export default Profile
