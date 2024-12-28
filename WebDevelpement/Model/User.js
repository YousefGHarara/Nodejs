const { dbConnection } = require("../Configurations");
const { userValidator, loginValidator } = require("../Validators");
const { hashSync, compareSync } = require("bcryptjs");

class User {
  constructor(userData) {
    this.userData = userData;
  }

  // npm i bcryptjs
  save(cb) {
    dbConnection("users", async (db) => {
      try {
        const hashPassword = hashSync(this.userData.password);
        this.userData.password = hashPassword;

        await db.insertOne(this.userData).then((result) => {
          cb({
            status: true,
            _user_id: result.insertedId,
          });
        });

        // const newUser = await db.findOne({email: this.userData.email})
      } catch (err) {
        cb({
          status: false,
          message: err.message,
        });
      }
    });
  }

  isExist() {
    return new Promise((res, rej) => {
      dbConnection("users", async (db) => {
        try {
          const user = await db.findOne({
            $or: [
              { username: this.userData.username },
              { email: this.userData.email },
            ],
          });
          if (!user) {
            res({
              check: false,
            });
          } else {
            if (user.username === this.userData.username) {
              res({
                check: true,
                message: "the username is already exists",
              });
            } else if (user.email === this.userData.email) {
              res({
                check: true,
                message: "the email is already exists",
              });
            }
          }
        } catch (err) {
          rej(err);
        }
      });
    });
  }

  // npm i @hapi/joi
  static validation(userData) {
    try {
      return userValidator.validate(userData);
    } catch (err) {
      return false;
    }
  }

  static login(loginData) {
    return new Promise((resolve, reject) => {
      const validation = loginValidator.validate(loginData);

      if (validation.error) {
        resolve({
          status: false,
          message: validation.error.message,
          code: 409,
        });
        return;
      }

      dbConnection("users", async (db) => {
        try {
          /*         The second way          */
          // const dbResult = await db
          //   .aggregate([
          //     {
          //       $lookup: {
          //         // from: related-collection
          //         from: "reviewers",
          //         // localField: key -> main-collection
          //         localField: "_id",
          //         // foreignField: foreignKey -> related-collection
          //         foreignField: "_user_id",
          //         // as: return data -> name for related-collection
          //         as: "reviewer",
          //       },
          //     },
          //     {
          //       $match: {
          //         username: loginData.username,
          //       },
          //     },
          //     {
          //       $limit: 1,
          //     },
          //   ])
          //   .toArray();

          // if (dbResult) {
          //   const user = dbResult[0];

          //   if (!user || !compareSync(loginData.password, user.password)) {
          //     resolve({
          //       status: false,
          //     });
          //   }

          //   user.reviewer = user.reviewer[0] ? user.reviewer[0] : null;
            
          //   resolve({
          //     status: true,
          //     data: user,
          //   });
          // } else {
          //   resolve({
          //     status: false,
          //   });
          // }

          /*         The first way          */
          const user = await db.findOne(
            {
              username: loginData.username,
            }
          );
          if (user) {
            console.log("In user");
            if (compareSync(loginData.password, user.password)) {
              dbConnection("reviewers", async (db) => {
                const reviewer = await db.findOne({
                  _user_id: user._id,
                });
                if (reviewer) {
                  user.reviewer = reviewer;
                }
                resolve({
                  status: true,
                  data: user,
                });
              });
            } else {
              resolve({
                status: false,
                message: "login failed",
                code: 402,
              });
            }
          } else {
            resolve({
              status: false,
              message: "login failed",
              code: 402,
            });
          }

          /*         End First way        */


        } catch (err) {
          reject({
            status: false,
            message: err.message,
          });
        }
      });
    });
  }
}

module.exports = User;

// const userData = {
//   name: "yousef",
//   email: "you2@gmail.com",
//   username: "yousefhh",
//   password: "12345",
// };

// const user = new User(userData);

// // user.save();

// const valResult = User.validation(userData);

// console.log(valResult);

// if (valResult.error) {
//   // error
// } else {
//   // correct
//   // save user
// }

// user
//   .isExist()
//   .then((status) => {
//     console.log(status);
//     if (!status.check) {
//       // save user
//     }
//   })
//   .catch();
