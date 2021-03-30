const router = require('express').Router();
const { User,Event } = require('../../models');
const sendmail = require('sendmail')({silent:true});

router.post('/', async (req, res) => {
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

router.get('/', async (req,res) => {
    
  try {
    const eventData = await Event.findAll();
    const events = eventData.map((event) =>
    event.get({ plain: true })
    );

    res.status(200).json(events); 
if (!eventData){
  res.status(404).json({message:'no event found'})
}

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    };
});
router.post('/:id', async (req,res) => {
    
  try {
    const eventData = await Event.findByPk(req.params.id);
    const events = eventData.get({ plain: true });
    sendmail({
      from: 'chelseymorris001@gmail.com',
      to: req.body.inviteEmails,
      subject: 'You Have Been Invited!',
      html: `<h1>You've Been Invited to An Event on JumpIn</h1>
      <a href="/event/${events.id}">
      <p>${events.event_name}</p>
      <p>${events.event_host}</p>
      <p>${events.description}</p>
      <p>${events.event_date}</p>
      <p>${events.event_address}</p>
      <p>${events.event_city}</p>
      <p>${events.event_state}</p>
      <p>${events.event_zip}</p>
     </a> `,
  },
     function(err, reply) {
      console.log(err && err.stack);
      console.dir(reply);
  });
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
