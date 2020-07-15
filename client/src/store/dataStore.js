import { observable, action } from 'mobx';

class DataStore {
  @observable launches = {
    flight_number: null,
    mission_name: null,
    launch_year: null,
    launch_date_local: null,
    launch_success: null,
    rockets: {
      rocket_id: null,
      rocket_name: null,
      rocket_type: null,
    },
  };
  @action setLaunches = {
    light_number: data.flight_number,
    mission_name: data.mission_name,
    launch_year: data.launch_year,
    launch_date_local: data.launch_date_local,
    launch_success: data.launch_success,
    rockets: {
      rocket_id: data.rocket_id,
      rocket_name: data.rocket_name,
      rocket_type: data.rocket_type,
    },
  };
}

const store = new DataStore();
export default store;
