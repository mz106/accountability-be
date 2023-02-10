const User = require("../user/model.js");

// Comment / uncomment the checks that need to be carried out 

exports.validateNewUser = async (request, response,next) => {

  const checks = [
    isUserUnique,
    // validatePassword,
  ];

  for (let i = 0; i < checks.length; i++) {
    const result = await checks[i](request);
    if (!result.status) {
      response.status(201).send({ error: result.msg });
      return;
    }
  }

  next();
};


const validatePassword = (request) => {

  // Password must be min 8 char, one letter, one num
  try {
    if (!request.body.password) {return {status: false, msg: "No Password Provided"};}

    const test = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(request.body.password);
    
    if (!test) {return {status: false, msg: "invalid password"};}

    return { status: true };
  } catch (error) {
    console.log(error);
    response.status(500).send({ error: error.message });
  }
};


const isUserUnique = async (request) => {
  const user = await User.findOne({where: {username: request.body.username,}});

  if (user) {
    return {status: false, msg: "Username unavailable"};
  }

  return { status: true };
};
