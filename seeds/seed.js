const sequelize = require('../config/connection');
const { User, Event, Parti } = require('../models');

const userData = require('./userData.json');
const eventData = require('./eventtData.json');
const partiData =require('./partiData.json')
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const event of eventData) {
    await Event.create({
      ...event,
      user_id: users[Math.floor(Math.random() * users.length)].user_id,
      individualHooks:true,
      returning:true
    });

  }
  for (const parti of partiData) {
    await Parti.create({
      ...parti,
      user_id: users[Math.floor(Math.random() * users.length)].user_id,
    });
  }

  process.exit(0);
};

seedDatabase();
