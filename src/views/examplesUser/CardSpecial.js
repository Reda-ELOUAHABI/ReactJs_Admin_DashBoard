import PluginsCompo from "components/Components/PluginsCompo";
import React from "react";

function CardSpecial() {
  return (
    <div>
      <div className="caardspecial">
        <h1 className="MyPlugins container">My Plugins</h1>
        <i class="fas fa-plus-circle"></i>
        <div className="separatorLine"></div>
        <PluginsCompo />
      </div>
    </div>
  );
}

export default CardSpecial;
