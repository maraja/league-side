import bcrypt, { hashSync } from "bcryptjs";

const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(12));

export default hashPassword;