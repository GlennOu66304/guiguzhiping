import UserModel from "../../models/User.js";

// import passowrd hash
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default {
  register: (req, res) => {
    // collection check the user in the database
    UserModel.findOne({ username: req.body.username }).then((user) => {
      if (user) {
        return res.status(400).json({ code: 1, msg: "用户名已经被注册" });
      }
      // user data fromat check
      const newUser = new UserModel({
        username: req.body.username,
        type: req.body.type,
        password: req.body.password,
      });

      //   // b,password need to be decoded as hash value;
      //   const salt =  bcrypt.genSalt(10);
      //   const hashedpassword =  bcrypt.hash(newUser.password, salt);

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save().then((user) => res.json({ code: 0, data: user })); // send back the user data in the database
        });
      });
    });
  },

  login: (req, res) => {
    //  validate the login
    // const { errors, isValid } = validateLoginInput(req.body);
    // if (!isValid) {
    //   res.status(400).json(errors);
    // }
    // get the email and password from the req.body, then assing a value

    const { username, password } = req.body;
    //  a.find the email (Social Media login):Findone

    UserModel.findOne({ username }, function (err, user) {
      // promise(then) if not find, then return a error
      if (!user) {
        return res.send({ code: 0, msg: "用户不存在" });
      }
      // b.compaire the password: password hash then compare password, hash else
      bcrypt.compare(password, user.password).then((isMatch) => {
        if (isMatch) {
          // c.login:succsss login value
          // d.return a token (andy MERN Start)
          // res.status(200).json({ msg: "succsss" });
          // user id in the database
          const rule = { id: user.id, name: user.name };
          const privateKey = "ticketSystem";
          // jwt token generate
          jwt.sign(rule, privateKey, { expiresIn: 3600 }, (err, token) => {
            if (err) throw err;

            res.send({
              code: 1,
              // bearer to verify the token:change the mr wu token to bearer
              token: "Bearer " + token,
              data: user,
            });
          });
        } else {
          return res.send({ code: 0, msg: "密码错误" });
        }
      });
    });
  },

  //Update  User
  updateUser: async (req, res) => {
    try {
      const User = await UserModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { upsert: true, setDefaultsOnInsert: true, new: true }
      );
      // [yup this looks like a confirmed bug:]
      // https://github.com/Automattic/mongoose/issues/5455
      // console.log(req.params.id);
      res.status(200).json(User);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //delete User
  deletetUser: async (req, res) => {
    UserModel.findOneAndDelete(req.params.id, (err, docs) => {
      if (err) {
        res.status(404).json({ msg: "delete failed" });
      } else {
        // console.log("Result : ", docs);
        res.status(200).json({ success: true, msg: "user has been deleted" });
      }
    });
  },

  //get a user

  getAUser: async (req, res) => {
    // User details content only the User creater can view it
    // verifiy the user login, then go to the User id
    console.log(req.params.id);
    await UserModel.findById(req.params.id, (err, docs) => {
      if (err) {
        res.status(404).json({ msg: "no User details found" });
      } else {
        // console.log("Result : ", docs);
        res.status(200).json(docs);
      }
    });
  },

  // get all User
  getAllUser: async (req, res) => {
    // console.log(req.user.id);
    const data = await serModel
      .find((err, res) => {
        if (err) {
          // res.status(403).json({ msg: "no user found" });
          console.log(err);
        }
        // res.status(200).json(res);
        console.log("data fetch succsssfully");
      })
      .populate("parent")
      .limit(10);

    if (!data) {
      res.status(403).json({ msg: "no user found" });
    }
    res.status(200).json(data);
  },
};
