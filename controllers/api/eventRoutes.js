const router = require('express').Router();
const { User,Event } = require('../../models');

router.post('/event', async (req, res) => {
  try {
    const newEvent = await Event.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newEvent);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', async (req,res) => {
    
  try {
    const eventData = await Event.findByPk(req.params.id);
    res.status(200).json(eventData)
if (!eventData){
  res.status(404).json({message:'no event found'})
}
    
      
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    };
});

router.delete('/:id', async (req, res) => {
  try {
    const eventData = await Event.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!eventData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(eventData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
