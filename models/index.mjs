import { Sequelize } from "sequelize";
import url from "url";
import allConfig from "../config/config.js";

import initUserModel from "./user.mjs";
import initLessonModel from "./lesson.mjs";
import initUserLessonModel from "./userLesson.mjs";

const env = process.env.NODE_ENV || "development";

const config = allConfig[env];

const db = {};

let sequelize;

if (env === "production") {
  // break apart the Heroku database url and rebuild the configs we need

  const { DATABASE_URL } = process.env;
  const dbUrl = url.parse(DATABASE_URL);
  const username = dbUrl.auth.substr(0, dbUrl.auth.indexOf(":"));
  const password = dbUrl.auth.substr(
    dbUrl.auth.indexOf(":") + 1,
    dbUrl.auth.length
  );
  const dbName = dbUrl.path.slice(1);

  const host = dbUrl.hostname;
  const { port } = dbUrl;

  config.host = host;
  config.port = port;

  sequelize = new Sequelize(dbName, username, password, config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

db.User = initUserModel(sequelize, Sequelize.DataTypes);
db.Lesson = initLessonModel(sequelize, Sequelize.DataTypes);
db.UserLesson = initUserLessonModel(sequelize, Sequelize.DataTypes);

db.User.belongsToMany(db.Lesson, { through: db.UserLesson });
db.Lesson.belongsToMany(db.User, { through: db.UserLesson });

db.User.hasMany(db.UserLesson);
db.UserLesson.belongsTo(db.User);
db.Lesson.hasMany(db.UserLesson);
db.UserLesson.belongsTo(db.Lesson);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
