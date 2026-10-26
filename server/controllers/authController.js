import genToken from "../config/jwtToken.js"
import User from "../models/userModel.js"

export const googleAuth = async (req, res) => {
    try {
        const { name, email } = req.body

        let user = await User.findOne({ email })

        if (!user) {
            user = await User.create({
                name,
                email
            })
        }

        let token = await genToken(user._id)

        console.log("GENERATED TOKEN:", token)

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return res.status(200).json(user)

    } catch (error) {
        return res.status(404).json({
            message: `Google Auth Error ${error}`
        })
    }
}

export const logOut = async (req, res) => {
    try {
        res.clearCookie("token")

        return res.status(200).json({
            message: "logOut Successfully"
        })

    } catch (error) {
        return res.status(404).json({
            message: `logout ${error}`
        })
    }
}