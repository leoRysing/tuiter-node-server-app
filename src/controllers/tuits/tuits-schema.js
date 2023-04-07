import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  liked: Boolean,
  dislikes: Number,
  disliked: Boolean,
  handle: String,
  image: String,
  userName: String,
  time: String,
  retuits: Number,
  replies: Number
}, {collection: 'tuits'});
export default schema;

