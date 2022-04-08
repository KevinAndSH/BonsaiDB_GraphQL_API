const bcrypt = require("bcryptjs")
const { UserModel, BookModel } = require("../model")

const MutationResolvers = {
  signup: async (_, args, context) => {
    const { username, password, passwordConfirm } = args

    if (password !== passwordConfirm) throw new Error("Passwords don't match")

    const newUser = new UserModel({
      username,
      encryptedPassword: bcrypt.hashSync(password, 10)
    })
    
    newUser.save().catch(console.error)
    
    const token = context.createToken({ username })
    return { token }
  },

  login: async (_, args, context) => {
    const { username, password } = args

    const userData = await UserModel.findOne({ username })
    if (!userData) throw new Error("User doesn't exist")
    if (!bcrypt.compareSync(password, userData.encryptedPassword)) throw new Error("Wrong password")

    const token = context.createToken({ username: userData.username })
    return { token }
  },

  registerBook: async (_, args, context) => {
    context.getUserDataFromReq()

    const newBook = new BookModel(args)
    return newBook.save().catch(console.error)
  },
}

module.exports = MutationResolvers
