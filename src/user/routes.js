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
 *      UserSuccess:
 *          type: object
 *          properties:
 *              message:
 *                  type: string
 *                  description: a message regarding user creation success
 *                  example: success
 *              new_user:
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
 *
 *
 */

module.exports = router;
