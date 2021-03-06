const jwt = require("jsonwebtoken")

const generateToken = (obj) => {
    const token = jwt.sign(
        {
            ...obj
        },

        process.env.JWT_SECRET || "somethingsecret",

        {
            expiresIn: "1d",
        }
    )

    return token
}

module.exports = generateToken