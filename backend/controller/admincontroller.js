const User = require("../model/user");

exports.getUser = async (req, res, next) => {
  console.log("good to go");

  try {
    if (!req.body.email) {
      throw new Error("You must provide an email");
    }
    username = req.body.name;
    email = req.body.email;
    password = req.body.password;
    console.log({ username, email, password });

    const data = await User.create({ username, email, password });
    res.status(201).json({ newDetails: data });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

exports.showUser = async (req,res) => {
  User.findAll().then((user) => {
    res.status(201).json(user);

  });
};
exports.deleteData=(req,res)=>{
 const id=req.params.id
 User.findByPk(id).then((user)=>{
    user.destroy()
 }).then(() => {
    console.log("deleted product");
    ;
  });
}
