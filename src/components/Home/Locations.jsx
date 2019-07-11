import React from "react";
import "./Locations.css";

// import antd
import { List, Spin, Icon } from "antd";

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class Locations extends React.Component {
  render() {
    const content = this.props.loading ? (
      <Spin indicator={antIcon} />
    ) : (
      <List
        size="small"
        header={
          <div>
            <h4>Results</h4>
          </div>
        }
        bordered
        dataSource={this.props.locations}
        renderItem={item => (
          <List.Item onClick={() => this.props.viewForecast(item.woeid)}>
            {item.title}
          </List.Item>
        )}
      />
    );

    return <div className="locations">{content}</div>;
  }
}

export default Locations;
