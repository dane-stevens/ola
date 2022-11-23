import { DataTypes } from "sequelize";
import { sequelize } from "~/utils/db.server";

// Defining a model (table)
// https://sequelize.org/docs/v6/core-concepts/model-basics/#using-sequelizedefine

const Comment = sequelize.define("comment", {
  comment: {
    type: DataTypes.STRING,
  },
  username: {
    type: DataTypes.STRING,
  },
  province: {
    type: DataTypes.ENUM('AB','BC','MB','NB','NL','NS','NT','ON','QC','SK','YT')
  },
  regDate: {
    type: DataTypes.DATE,
  },
  email: {
    type: DataTypes.STRING,
  },
  emailList: {
    type: DataTypes.BOOLEAN,
  },
});

export { Comment };
