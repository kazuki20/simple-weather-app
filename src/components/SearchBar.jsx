import React from "react";
import "./SearchBar.css";

// import antd
import { Input, Icon } from "antd";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-bar">
        <h4>Enter a city name</h4>
        <Input
          prefix={<Icon type="search" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Search for a city"
          allowClear
          onChange={this.props.onChange}
          name="searchInput"
        />
      </div>
    );
  }
}

export default SearchBar;
