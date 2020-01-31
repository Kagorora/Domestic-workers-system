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
    if (!userExists) {
      res.status(401).json({
        status: res.statusCode,
        result: 'Invalid email or password!',
      })
    } else if (userExists) {
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
          status: 200,
          userInfo,
          token,
        })
      }
    }
  } catch (error) {
    // return res.status(500).json({ error })
  }
}
export default loginController
