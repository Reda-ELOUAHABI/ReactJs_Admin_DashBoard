import PluginsCompo from "components/Components/PluginsCompo";
import React from "react";

function CardSpecial() {
  return (
    <div className="CardSpecialContainer">
      <div className="caardspecial">
      {/* I could remove container class */}
        <h1 className="MyPlugins container">My Plugins</h1>
        <i class="fas fa-plus-circle"></i>
        <div className="separatorLine"></div>
        <PluginsCompo />

        <div className="separatorLine"></div>
        <PluginsCompo />

        <div className="separatorLine"></div>
        <PluginsCompo />
        <div className="separatorLine"></div>
        <PluginsCompo />
        <div className="separatorLine"></div>
        <PluginsCompo />
      </div>
    </div>
  );
}

export default CardSpecial;
