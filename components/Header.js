import React from "react";
import { Menu } from "semantic-ui-react";
import { Link, Router } from "../routes";
import "semantic-ui-css/semantic.min.css";

const Header = () => {
  return (
    <>
      <Menu style={{ marginTop: "1rem" }}>
        <Link route="/">
          <a className="item">CrowdCoin</a>
        </Link>

        <Menu.Menu position="right">
          <Link route="/">
            <a className="item">Campaigns</a>
          </Link>

          <Link route="/campaigns/new">
            <a className="item">+</a>
          </Link>
        </Menu.Menu>
      </Menu>
    </>
  );
};

export default Header;
