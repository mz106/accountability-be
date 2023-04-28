const { Router } = require("express");
const router = new Router();

/**
 * @swagger
 * components:
 *   schemas:
 *      User:
 *          type: object
 *          properties:
 *              id:
 *                  type: integer
 *                  description: the user's id
 *                  example: 1
 *              username:
 *                  type: string
 *                  description: the user's username
 *                  example: random cat
 *              hash_pass:
 *                  type: string
 *                  description: a password hashed to be stored in db
 *                  example: ergh;uh8y22357923857iefhkhi2
 *              is_admin:
 *                  type: boolean
 *                  description: a boolean to set whether user is admin or not
 *                  example: true
 *
 *      NewUser:
 *          type: object
 *          properties:
 *              username:
 *                  type: string
 *                  description: the user's username
 *                  example: random cat
 *              clear_pass:
 *                  type: string
 *                  description: a clear, non-hashed password
 *                  example: password
 *              is_admin:
 *                  type: boolean
 *                  descripition: a boolean to set whether user is admin or not
 *                  example: false
 *
 *      UserCreationSuccess:
 *          type: object
 *          properties:
 *              message:
 *                  type: string
 *                  description: a message regarding user creation success
 *                  example: success
 *              returned_user:
 *                  type: object
 *                  properties:
 *                      username:
 *                          type: string
 *                          description: the user's username
 *                          example: random cat
 *                      clear_pass:
 *                          type: string
 *                          description: a clear, non-hashed password
 *                          example: password
 *                      is_admin:
 *                           type: boolean
 *                           description: a boolean to set whether user is admin or not
 *                           example: false
 *
 *      UserCreationFailure:
 *          type: object
 *          properties:
 *              message:
 *                  type: string
 *                  description: a failure message
 *                  example: failure
 *
 *
 */

/**
 * @swagger
 * /user:
 * post:
 *      security: []
 *
 *      tags:
 *          - user
 *      description: creates a new user
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/NewUser'
 *      responses:
 *          '201':
 *              description: response success
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/UserCreationSchema'
 *                  '501':
 *                      description: error response user not created
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  $ref: '#/components/schemas/UserCreationFailure'
 *
 *
 */

// create user signup

router.post("/", (req, res) => {
  try {
    res.status(201).json({ msg: "all good" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

module.exports = router;
