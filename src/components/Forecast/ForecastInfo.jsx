import React from "react";
import "./ForecastInfo.css";

// import antd
import { List, Spin, Icon } from "antd";
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class Locations extends React.Component {
  render() {
    if (this.props.forecast == null) return false;

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
        dataSource={this.props.forecast}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={item.applicable_date}
              description={<h4>{item.weather_state_name}</h4>}
            />
            <div style={{ marginRight: "20px" }}>
              {item.min_temp ? item.min_temp.toFixed(1) : ""}°C <br /> Min
            </div>
            <div>
              {item.max_temp ? item.max_temp.toFixed(1) : ""}°C <br /> Max
            </div>
          </List.Item>
        )}
      />
    );
    return <div className="locations">{content}</div>;
  }
}

export default Locations;
