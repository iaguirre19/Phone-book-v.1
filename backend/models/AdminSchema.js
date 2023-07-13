import mongoose from "mongoose";
import bcrypt from "bcrypt";
import idGenerator from "../helpers/idGenerator.js";


const adminSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  roles: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  token: {
    type: String,
    default: idGenerator(),
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
});

// Hashear el password
adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

adminSchema.methods.comparePassword = async function (passwordForm) {
  return await bcrypt.compare(passwordForm, this.password);
};


const AdminProfiles = mongoose.model("adminDB", adminSchema);
export default AdminProfiles;