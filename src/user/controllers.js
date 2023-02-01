//  CRUD operations for user 

// TO DO => Need to import user model here 

const jwt = require("jsonwebtoken");


// create a new user
exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(
      {
        username: req.body.username,
        hash_pass: req.body.password,
        is_admin: req.body.is_admin
      },
      {
        attributes: [
        "id",
        "username",
        "is_admin",
        ],
      }
    );
    //  Create a token
    const token = await jwt.sign({ id: newUser.id,username: newUser.username }, process.env.SECRET);

    newUser.token = token;
    res.status(201).json({
      token: token,
      id: newUser.id,
      username: newUser.username,
      is_admin: newUser.is_admin,
    });

  } catch (error) {
      res.status(500).json({ message: error.message,});
  }
};


