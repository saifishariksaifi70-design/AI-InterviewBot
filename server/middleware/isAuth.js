import jwt from "jsonwebtoken"

const isAuth = async (req, res, next) => {
    try {
        // console.log("COOKIES:", req.cookies)

        const token = req.cookies.token

        // console.log("TOKEN:", token)

        if (!token || token === "undefined") {
            return res.status(400).json({
                message: "User Doesn't Have a token"
            })
        }

        const verifyToken = jwt.verify(
            token,
            process.env.JWT_SECRET
        )

        req.userId = verifyToken.userId

        // console.log("USER ID:", req.userId)

        next()

    } catch (error) {
        console.log("JWT ERROR:", error)

        return res.status(400).json({
            message: `isAuth error ${error.message}`
        })
    }
}

export default isAuth