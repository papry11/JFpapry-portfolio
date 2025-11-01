import jwt from "jsonwebtoken";

export const authAdmin = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (!token || !token.startsWith("Bearer ")) {
      return res.json({
        success: false,
        message: "Not authorized login again",
      });
    }

    token = token.split(" ")[1]; // remove 'Bearer '
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    if (token_decode.email !== process.env.ADMIN_EMAIL) {
      return res.json({
        success: false,
        message: "Not authorized login again",
      });
    }

    next();
  } catch (error) {
    console.error("AuthAdmin Error:", error.message);
    return res.json({
      success: false,
      message: "Server error, please try again later",
    });
  }
};
