const axios = require('axios');
const resolvers = {
  Query: {
    async launches(parent, args) {
      console.log(args.limit);
      let res = await axios.get(
        `https://api.spacexdata.com/v3/launches${
          args.limit ? '?limit=' + args.limit : ''
        }`
      );

      return res.data.map((e) => {
        return {
          flight_number: e.flight_number,

          mission_name: e.mission_name,

          launch_year: e.launch_year,

          launch_date_local: e.launch_date_local,

          launch_success: e.launch_success,

          //   rocket: {

          //   },
        };
      });
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
      return res;
    },
    async rocket() {
      let res = await axios.get(
        `https://api.spacexdata.com/v3/rockets/${args.id}`
      );
      return res;
    },
  },
};

module.exports = resolvers;
