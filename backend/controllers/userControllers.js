import UsersProfile from "../models/UserSchema.js";

const createUser = async (req, res) => { 
  const { email, name } = req.body;

  const userValidation = await UsersProfile.findOne({ email });

  if (userValidation) {
    const error = new Error(`Would you like to add ${name} again?`);
    console.log(error);
    return res.json({ msg: error.message });
  }

  try {
    const user = new UsersProfile(req.body);
    const userSave = await user.save();
    res.json(userSave);
  } catch (error) {
    console.log(error);
  }
};

const getUsers = async (req, res) => {
  const dataUsers = await UsersProfile.find();
  console.log(dataUsers);
  res.json({ msg: "Now you are connected to DB" });
};

const getUser = async (req, res) => {
  const { id } = req.params;
  const user = await UsersProfile.findById(id);

  res.json(user)
}
const updateUser = async (req, res) => {}
const deleteUser = async (req, res) => {}
 

export { createUser, getUsers, getUser, updateUser, deleteUser, };
