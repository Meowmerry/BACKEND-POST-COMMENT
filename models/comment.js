module.exports = (sequelize, Datatypes) => {
  const comment = sequelize.define("comment", {
    author: {
      type: Datatypes.STRING(100)
    },
    text: {
      type: Datatypes.STRING(500)
    }
  });
  return comment;
};
