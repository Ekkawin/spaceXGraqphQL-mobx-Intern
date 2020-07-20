const axios = require('axios');
const resolvers = {
  Query: {
    async launches(parent, args) {
      console.log('agrs at launches', args);
      console.log(args.limit);
      if (!args.limit) {
        let res = await axios.get('https://api.spacexdata.com/v3/launches');

        return res.data.map((e) => {
          return {
            flight_number: e.flight_number,

            mission_name: e.mission_name,

            launch_year: e.launch_year,

            launch_date_local: e.launch_date_local,

            launch_success: e.launch_success,

            rockets: {
              rocket_id: e.rocket.rocket_id,
              rocket_name: e.rocket.rocket_name,
              rocket_type: e.rocket.rocket_type,
            },
          };
        });
      } else {
        console.log(args.limit, 'hihihihihihihihi');
        let res = await axios.get(
          `https://api.spacexdata.com/v3/launches?limit=${args.limit}`
        );
        console.log('hiiii');
        return res.data.map((e) => {
          return {
            flight_number: e.flight_number,

            mission_name: e.mission_name,

            launch_year: e.launch_year,

            launch_date_local: e.launch_date_local,

            launch_success: e.launch_success,

            rockets: {
              rocket_id: e.rocket.rocket_id,
              rocket_name: e.rocket.rocket_name,
              rocket_type: e.rocket.rocket_type,
            },
          };
        });
      }
    },
    async launch(parent, args) {
      console.log('args', args.flight_number);
      let res = await axios.get(
        `https://api.spacexdata.com/v3/launches/${args.flight_number}`
      );
      return { flight_number: res.data.flight_number };
    },
    async rockets() {
      let res = await axios.get('https://api.spacexdata.com/v3/rockets');
      return res.data.rocket.map((e) => {
        return {
          rocket_id: e.rocket.rocket_id,
          rocket_name: e.rocket.rocket_name,
          rocket_type: e.rocket.rocket_type,
        };
      });
    },
    async rocket() {
      let res = await axios.get(
        `https://api.spacexdata.com/v3/rockets/${args.id}`
      );
      return res;
    },
  },
  Mutation: {
    async changeLaunches(parent, args) {
      console.log(args.data);
      console.log('hi what is null');
      return {
        flight_number: args.data.flight_number,
        mission_name: args.data.mission_name,

        launch_year: args.data.launch_year,

        launch_date_local: args.data.launch_date_local,

        launch_success: args.data.launch_success,

        // rockets: {
        //   rocket_id: args.data.rocket.rocket_id,
        //   rocket_name: args.data.rocket.rocket_name,
        //   rocket_type: args.data.rocket.rocket_type,
        // },
      };
    },
  },
};

module.exports = resolvers;
