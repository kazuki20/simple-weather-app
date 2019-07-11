import { FETCH_LOCATIONS, FETCH_FORECAST, FETCHING_DATA } from './types';
import axios from 'axios';

export const fetchLocations = (searchInput) => async dispatch => {
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  dispatch(fetchingData());

  await axios.get(proxy + 'https://www.metaweather.com/api/location/search/?query=' + searchInput)
    .then(res => res.data)
    .then(locations => {
      dispatch({
        type: FETCH_LOCATIONS,
        payload: locations
      })
    });
}

export const fetchForecast = (woeid) => async dispatch => {
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  dispatch(fetchingData());

  await axios.get(proxy + 'https://www.metaweather.com/api/location/' + woeid)
    .then(res => res.data.consolidated_weather)
    .then(forecast => {
      dispatch({
        type: FETCH_FORECAST,
        payload: forecast
      })
    });
}

export const fetchingData = () => ({
  type: FETCHING_DATA
});