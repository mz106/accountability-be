const User = require("../user/model.js");

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


