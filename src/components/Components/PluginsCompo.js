import React from 'react'

function PluginsCompo() {
    const imageCard =
    "https://image.flaticon.com/icons/png/512/20/20857.png";

    return (
        <div>
            <div className="ImagePlugins">
            <img
              className="avatar "
              src={imageCard}
              alt="Icon_Image"
            />
            </div>
            <div>
                <h4> 2 requested Items</h4> 
                <p>3 min ago</p>
            </div>
        </div>
    )
}

export default PluginsCompo
