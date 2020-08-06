/**
 * @swagger
 *   components:
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - name
 *          - email
 *          - password
 *        properties:
 *          id:
 *             type: string
 *             readOnly: true
 *          name:
 *            type: string
 *            description: The user fullname
 *            minimum: 6
 *            maximum: 1024
 *          email:
 *            type: string
 *            format: email
 *            description: Email for the user, needs to be unique.
 *            minimum: 6
 *            maximum: 255
 *          password:
 *            type: string
 *            format: passwoed
 *            description: Password for the user.
 *            minimum: 6
 *            maximum: 255
 *            writeOnly: true
 *          isActive:
 *             type: Boolean
 *             description: Status of user verification
 *             readOnly: true
 *          Date:
 *             type: Date
 *             description: User regisration date
 *             readOnly: true
 *        example:
 *           name: Alexander
 *           email: fake@email.com
 *           password: passwordpassword
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      Login:
 *        type: object
 *        required:
 *          - email
 *          - password
 *        properties:
 *          email:
 *            type: string
 *            format: email
 *            description: Email for the user, needs to be unique.
 *            minimum: 6
 *            maximum: 255
 *            writeOnly: true
 *          password:
 *            type: string
 *            format: passwoed
 *            description: Password for the user.
 *            minimum: 6
 *            maximum: 255
 *            writeOnly: true
 *        example:
 *           email: fake@email.com
 *           password: passwordpassword
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      LoginResponse:
 *        type: object
 *        properties:
 *          access_token:
 *            type: string
 *            description: JWT access token
 *            readOnly: true
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      UserVerification:
 *        type: object
 *        required:
 *          - email
 *          - token
 *        properties:
 *          email:
 *            type: string
 *            format: email
 *            description: The user email address.
 *            minimum: 6
 *            maximum: 255
 *            writeOnly: true
 *          token:
 *            type: string
 *            description: Token sent to the user.
 *            writeOnly: true
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      UserVerificationRes:
 *        type: object
 *        properties:
 *          data:
 *            type: string
 *            description: success.
 *            readOnly: true
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      UserVerificationResend:
 *        type: object
 *        required:
 *          - email
 *        properties:
 *          email:
 *            type: string
 *            format: email
 *            description: The user email address.
 *            minimum: 6
 *            maximum: 255
 *            writeOnly: true
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      PasswordReset:
 *        type: object
 *        required:
 *          - email
 *          - token
 *          - password
 *        properties:
 *          email:
 *            type: string
 *            format: email
 *            description: The user email address.
 *            minimum: 6
 *            maximum: 255
 *            writeOnly: true
 *          token:
 *            type: string
 *            description: Token sent to the user.
 *            writeOnly: true
 *          password:
 *            type: string
 *            format: passwoed
 *            description: Password for the user.
 *            minimum: 6
 *            maximum: 255
 *            writeOnly: true
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      PasswordChange:
 *        type: object
 *        required:
 *          - oldPassword
 *          - newPassword
 *        properties:
 *          oldPassword:
 *            type: string
 *            format: passwoed
 *            description: Password for the user.
 *            minimum: 6
 *            maximum: 255
 *            writeOnly: true
 *          newPassword:
 *            type: string
 *            format: passwoed
 *            description: Password for the user.
 *            minimum: 6
 *            maximum: 255
 *            writeOnly: true
 */
