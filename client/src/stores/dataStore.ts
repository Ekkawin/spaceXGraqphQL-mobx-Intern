import { observable, action, toJS } from 'mobx';

class DataStore {
  @observable launches = [];
  @action setLaunches = (data) => {
    this.launches = [...this.launches, ...(data || {})];

    return this.launches;
  };
}

export const stores = new DataStore();
