import mongoose, { ObjectId } from "mongoose";

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  isFollowing: {
    type: Map<ObjectId, { email: String; userName: String }>,
  },
  adjencyList: {
    type: Map,
  },
});

mongoose.model("User", UserSchema);
