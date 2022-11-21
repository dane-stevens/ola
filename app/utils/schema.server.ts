import { DataTypes } from "sequelize";
import { sequelize } from "~/utils/db.server";

// Defining a model (table)
// https://sequelize.org/docs/v6/core-concepts/model-basics/#using-sequelizedefine

const Comment = sequelize.define("comment", {
  comment: {
    type: DataTypes.STRING,
  },
});

export { Comment };
