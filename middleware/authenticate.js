const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {
   
    const token = req.header('Authorization');

    
    if (!token) {
      return res.status(401).json({ message: "Unauthorized - Missing token" });
    }

   
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    
    req.user = decoded.userId;

    next(); 
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Unauthorized - Invalid token" });
  }
};
