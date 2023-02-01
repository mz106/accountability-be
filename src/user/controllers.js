//  CRUD operations for user 

// TO DO => Need to import user model here 

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
      res.status(201).json({
      id: newUser.id,
      username: newUser.username,
      is_admin: newUser.is_admin,
    });
  } catch (error) {
      res.status(500).json({ message: error.message,});
  }
};


