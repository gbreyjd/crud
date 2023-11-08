import { sequelize } from '../seaquelize.js';
import { DataTypes } from "sequelize";

const UserAuth = sequelize.define('userauth', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


export default UserAuth;

// import { sequelize } from '../seaquelize.js';
// import { DataTypes } from 'sequelize';

// const Paytient = sequelize.define('paytient', {
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// });

// const Post = sequelize.define('post', {
//   title: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   text: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   tags: {
//     type: DataTypes.ARRAY(DataTypes.STRING),
//     allowNull: false,
//     defaultValue: [],
//   },
//   viewsCount: {
//     type: DataTypes.INTEGER,
//     defaultValue: 0,
//   },
//   imageUrl: DataTypes.STRING,
// });

// // Устанавливаем связь между Post и Paytient (пост принадлежит пользователю)
// Post.belongsTo(Paytient, {
//   foreignKey: 'paytientId',
//   allowNull: true, // Или установите allowNull в зависимости от ваших требований
// });

// export  default { Paytient, Post };

// Paytient.hasMany(Post);

// sequelize.sync({force:true}).then(()=>{
//     console.log("Tables have been created");
//   }).catch(err=>console.log(err));