import React from "react";
import "./Index.css";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { fetchLocations } from "../actions/postAction";

import { Card, Col, Row, Typography } from "antd";

// components
import SearchBar from "./SearchBar";
import Locations from "./Locations";

const { Title } = Typography;

class Index extends React.Component {
  onChange = e => {
    if (e.target.value != "") this.props.fetchLocations(e.target.value);
  };

  render() {
    return (
      <Row gutter={16} type="flex" justify="center">
        <Col span={8}>
          <Card
            title={
              <Title className="text-center" level={3}>
                Simple Weather App
              </Title>
            }
            bordered={false}
          >
            <SearchBar onChange={this.onChange} />
            <Locations locations={this.props.locations} />
          </Card>
        </Col>
      </Row>
    );
  }
}

Index.propTypes = {
  fetchLocations: PropTypes.func.isRequired,
  locations: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  locations: state.locations.items
});

export default connect(
  mapStateToProps,
  { fetchLocations }
)(Index);
