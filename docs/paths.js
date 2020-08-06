/**
 * @swagger
 * path:
 *  /user/:
 *    get:
 *      summary: Get all users
 *      tags: [Users]
 *      responses:
 *        "200":
 *          description: An array of all the users (Both active and inactive)
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 */

/**
 * @swagger
 * path:
 *  /user/active:
 *    get:
 *      summary: Get all active users
 *      tags: [Users]
 *      responses:
 *        "200":
 *          description: An array of only the active users
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 */

/**
 * @swagger
 * path:
 *  /user/register:
 *    post:
 *      summary: Create a new user
 *      tags: [Users]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      responses:
 *        "200":
 *          description: The user schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 */

/**
 * @swagger
 * path:
 *  /user/login:
 *    post:
 *      summary: Get a JWT for an active user
 *      tags: [Users]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Login'
 *      responses:
 *        "200":
 *          description: The user schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/LoginResponse'
 */

/**
 * @swagger
 * path:
 *  /user/verify:
 *    post:
 *      summary: Verify a user registration using the token gotten from the mail.
 *      tags: [Users]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserVerification'
 *      responses:
 *        "200":
 *          description: The user schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/UserVerificationRes'
 */

/**
 * @swagger
 * path:
 *  /user/resend-verification-token:
 *    post:
 *      summary: Resend the verification email to a user.
 *      tags: [Users]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserVerificationResend'
 *      responses:
 *        "200":
 *          description: The user schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/UserVerificationRes'
 */

/**
 * @swagger
 * path:
 *  /user/send-password-reset-token:
 *    post:
 *      summary: Send a password reset token to the user.
 *      tags: [Users]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserVerificationResend'
 *      responses:
 *        "200":
 *          description: The user schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/UserVerificationRes'
 */

/**
 * @swagger
 * path:
 *  /user/password-reset:
 *    post:
 *      summary: Reset a user password with the token sent to the user.
 *      tags: [Users]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/PasswordReset'
 *      responses:
 *        "200":
 *          description: The user schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/UserVerificationRes'
 */

/**
 * @swagger
 * path:
 *  /user/change-password:
 *    post:
 *      summary: Change a user password.
 *      tags: [Users]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/PasswordChange'
 *      responses:
 *        "200":
 *          description: The user schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/UserVerificationRes'
 */
