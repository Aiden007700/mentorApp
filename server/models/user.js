const bcrypt = require("bcrypt-nodejs");
const Sequelize = require("sequelize");
const sequelize = new Sequelize("mentorApp", "root", null, {
  host: "localhost",
  dialect: "mysql",
});
const User = sequelize.define(
  "user",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    login: {
      type: Sequelize.TEXT,
    },
    password: Sequelize.TEXT,
  },
  {
    timestamps: false,
    hooks: {
      beforeCreate: (user, options) => {
        return new Promise((resolve, reject) => {
          bcrypt.genSalt(10, (err, salt) => {
            if (err) {
              reject(err);
            }

            return bcrypt.hash(user.password, salt, null, (err, hash) => {
              if (err) {
                reject(err);
              }
              user.password = hash;
              resolve();
            });
          });
        });
      },
    },
    tableName: "users",
  }
);

User.prototype.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return callback(err);

    callback(null, isMatch);
  });
};

User.sync();

module.exports = User;
