import { FETCH_LOCATIONS } from './types';
import axios from 'axios';

export const fetchLocations = (searchInput) => async dispatch => {
  var proxy = 'https://cors-anywhere.herokuapp.com/';

  await axios.get(proxy + 'https://www.metaweather.com/api/location/search/?query=' + searchInput)
    .then(res => res.data)
    .then(locations => {
      dispatch({
        type: FETCH_LOCATIONS,
        payload: locations
      })
    });
}