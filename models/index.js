const User = require('./User');
const Event = require('./Event');
const Parti = require('./Parti')
User.hasMany(Event, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Event.belongsTo(User, {
  foreignKey: 'user_id'
});
User.hasMany(Parti,{
  foreignKey:'user_id',
  onDelete:'CASCADE'
})
Parti.belongsTo(User,{
  foreignKey:'user_id'
})
Event.hasMany(Parti,{
  foreignKey:'event_id',
  onDelete:'CASCADE'
})
Parti.belongsTo(Event,{
  foreignKey:'event_id'
})

module.exports = { User, Event,Parti};
