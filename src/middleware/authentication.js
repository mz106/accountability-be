const bcrypt = require("bcrypt");

// Salt Rounds to hash password 
const saltRounds = 10;

exports.hashPass = async (request, response, next) => {
  try {
    // Catch missing password
    if (!request.body.clear_pass) {
      response.status(500).send({ error: "A password is required",});
      return;
    }

    // Hash the password using saltRounds defined above and save back to request body
    request.body.password = await bcrypt.hash(request.body.clear_pass, saltRounds);
    next();
  } catch (error) {
    response.status(500).send({ error: error.message });
  }
};
