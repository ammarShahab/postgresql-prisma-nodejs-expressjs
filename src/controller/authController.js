// 8.1 created a controller folder with a authController.js file

//  8.2 created a register function

const register = (req, res) => {
  const body = req.body;
  res.send(body);
};

// 8.3 export the register function
export { register };
