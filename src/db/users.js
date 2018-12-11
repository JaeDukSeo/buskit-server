var mongoose = require('mongoose')
var Schema = mongoose.Schema

const Stream = new Schema({
  id: String,
  title: String,
  type: String,
  viewer_count: Number,
  thumbnail_url: String,
  started_at: Date,
}, {
  _id: false,
  timestamps: true,
})

const User = new Schema({
  profile: {
    display_name: String,
    description: String,
    profile_image_url: String,
  },
  authid: {
    twitch: String,
  },
  streams: [Stream],
  subscriptions: {
    
  },
}, {
  timestamps: true,
})

module.exports = mongoose.model('User', User)