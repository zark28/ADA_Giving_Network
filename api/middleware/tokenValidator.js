/////////////VERIFY TOKEN/////////////////
  const verifyToken = (req, res, next) => {
    let token = req.headers['authorization'] || '';
  
    token = token.split(' ')[1];
    if (token) {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.user = decodedToken.id;
      next();
    } else {
      res.status(403).json({ message: 'Unauthotized' });
    }
  };