import React from "react";
import "./Locations.css";

// import antd
import { List } from "antd";

class Locations extends React.Component {
  render() {
    return (
      <div className="locations">
        <List
          size="small"
          header={
            <div>
              <h4>Results</h4>
            </div>
          }
          bordered
          dataSource={this.props.locations}
          renderItem={item => <List.Item>{item.title}</List.Item>}
        />
      </div>
    );
  }
}

export default Locations;
