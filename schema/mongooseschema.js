const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  flight_number: Number,
  mission_name: String,
  launch_year: String,
  launch_date_local: String,
  launch_success: Boolean,
});

const ProfileModel = mongoose.model('Profile', profileSchema);

module.exports = ProfileModel;
