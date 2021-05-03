export default function initLessonModel(sequelize, DataTypes) {
  return sequelize.define(
    "lesson",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        type: DataTypes.STRING,
      },
      task: {
        type: DataTypes.STRING,
      },
      template: {
        type: DataTypes.STRING,
      },
      test: {
        type: DataTypes.STRING,
      },
      premium: {
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      // The underscored option makes Sequelize reference snake_case names in the DB.
      underscored: true,
    }
  );
}
