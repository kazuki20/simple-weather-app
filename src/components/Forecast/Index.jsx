import React from "react";
import "./Index.css";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { fetchForecast } from "../../actions/locationAction";

import { Card, Col, Row, Typography, Button, Icon } from "antd";

// components
import ForecastInfo from "./ForecastInfo";

const { Title } = Typography;

class Index extends React.Component {
  componentWillMount() {
    this.props.fetchForecast(this.props.match.params.id);
  }

  render() {
    return (
      <Row gutter={16} type="flex" justify="center">
        <Col span={8}>
          <Card
            title={
              <div>
                <Button onClick={() => this.props.history.goBack()}>
                  <Icon type="arrow-left" /> Back
                </Button>
                <Title className="text-center" level={3}>
                  Simple Weather App
                </Title>
              </div>
            }
            bordered={false}
          >
            <ForecastInfo
              forecast={this.props.forecast}
              loading={this.props.loading}
            />
          </Card>
        </Col>
      </Row>
    );
  }
}

Index.propTypes = {
  fetchForecast: PropTypes.func.isRequired,
  forecast: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  forecast: state.locations.items,
  loading: state.locations.loading
});

export default connect(
  mapStateToProps,
  { fetchForecast }
)(Index);
