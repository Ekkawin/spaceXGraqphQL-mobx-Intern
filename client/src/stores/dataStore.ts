import { observable, action, toJS } from 'mobx';

class DataStore {
  // @observable launches = {
  //   flight_number: null,
  //   mission_name: null,
  //   launch_year: null,
  //   launch_date_local: null,
  //   launch_success: null,
  //   rockets: {
  //     rocket_id: null,
  //     rocket_name: null,
  //     rocket_type: null,
  //   },
  // };

  @observable launches = [];
  @action setLaunches = (data) => {
    this.launches = {
      ...this.launches,
      ...(data || {}),
      //     {
      //       flight_number: data.flight_number,
      //       mission_name: data.mission_name,

      // launch_date_local: data.launch_date_local,
      //       launch_success: data.launch_success,
      //     },
    };
    console.log('2', toJS(this.launches));

    return this.launches;
  };
}

export const stores = new DataStore();
