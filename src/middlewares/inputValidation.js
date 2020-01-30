import userValidation from '../helpers/userValidation'

class userValidate {
  static validateDomesticWorkers(req, res, next) {
    const validationResult = userValidation.validate({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      phoneNumber: req.body.phoneNumber,
      nid: req.body.nid,
      status: req.body.status,
      type: req.body.type,
      description: req.body.description,
      profile: req.body.profile,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt,
    })
    if (!validationResult.error) {
      req.user = validationResult
      next()
    } else {
      const wrongInput = validationResult.error.details[0].message
        .replace('"', ' ')
        .replace('"', '')
      return res.status(422).json({
        status: 422,
        error: wrongInput,
      })
    }
  }
}

export default userValidate
