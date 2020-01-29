import models from '../db/models'
import compare from '../helpers/decryptPswd'
import generateToken from '../helpers/generateToken'

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body
    const userExists = await models.user.findOne({
      where: {
        email,
      },
      raw: true,
    })
    if (userExists) {
      const encryptedPswd = userExists.password
      const pswdMatches = compare(password, encryptedPswd)
      if (pswdMatches) {
        const token = generateToken({
          userId: userExists.id,
          email: userExists.email,
        })
        const {
          password, nid, email, ...userInfo
        } = userExists
        res.status(200).json({
          status: res.statusCode,
          userInfo,
          token,
        })
      } else {
        res.status(401).json({
          status: res.statusCode,
          result: 'Invalid email or password!',
        })
      }
    }
  } catch (error) {
    res.status(500).json({
      status: res.statusCode,
      error: 'Internal server error',
    })
  }
}
export default loginController
