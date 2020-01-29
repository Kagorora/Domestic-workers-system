import bcrypt from 'bcrypt'

const compare = ((plainPswd, hashedPswd) => bcrypt.compareSync(plainPswd, hashedPswd))
export default compare
