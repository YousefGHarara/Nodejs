const { UserModel, ReviewerModel } = require("../Model");
const createError = require("http-errors");

const signup = (req, res, next) => {
  const userData = req.body;

  // Validation                       -> done
  const validation = UserModel.validation(userData);
  if (validation.error) {
    console.log("Validation Error !!");
    next(createError(400, validation.error.message));
    return;
  }

  console.log("Iam in a function !!");

  // check is Exits
  const user = new UserModel(userData);
  user
    .isExist()
    .then((result) => {
      if (result.check) {
        next(createError(409, result.message));
      } else {
        // save user in DB
        user.save((status) => {
          if (status.status) {
            const reviewer = new ReviewerModel({
              name: userData.name,
              _user_id: status._user_id,
            });

            reviewer.save((result) => {
              if (result.status) {
                res.status(201).json({
                  status: true,
                  message: "user had been created success !!",
                });
              } else {
                next(createError(500, "User created but reviewer aren't !"));
              }
            });
          } else {
            next(createError(500, status.message));
          }
        });
      }
    })
    .catch((err) => {
      next(createError(503, err.message));
    });

  console.log("The last line in function signup");
};

const login = (req, res, next) => {
  UserModel.login(req.body)
    .then((result) => {
      if (result.status) {
        res.status(200).json(result.data);
      }else {
        next(createError(result.code, result.message));
      }
    })
    .catch((err) => {
      next(500, err.message);
    });
};

module.exports = {
  signup,
  login,
};
