import React from "react";
import Block from "dxc-flex";
import DonationItem from "./DonationItem";

export default class Donation extends React.Component {
  render() {
    return (
      <Block layout="vertical" horizontal="center" style={{ margin: "30px 0" }}>
        <Block horizontal="center" style={{ fontSize: 18, fontWeight: 700, marginBottom: 15 }}>
          感谢支持
        </Block>
      </Block>
    );
  }
}
