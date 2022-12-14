import { Sequelize, Op, Model, DataTypes } from "sequelize";

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
});

declare global {
  var __sequelize;
}

(async function () {
  if (process.env.NODE_ENV === "development" && !global.__sequelize) {
    try {
      await sequelize.authenticate();
      console.log(`[DATABASE]: DB Connection Established`);
      global.__sequelize = true;
    } catch (err) {
      console.error(`[DATABASE]: DB Connection Failed - `, err);
    }
  }
})();

export const db = sequelize;

// sequelize.sync({ force: true });
