const router = require('express').Router();
const { User,Event, Parti } = require('./../models');

router.get('/',async (req,res) => {
    try{
    
      res.render('homepage', {}); 
  } catch(err){
    console.log(err);
    res.status(500).json(err);
  }
  });
  
 
  router.get('/login', (req, res) => {
    // if (req.session.loggedIn) {
    //   res.redirect('/');
    //   return;
    // }
    console.log('hi')
    res.render('login');
  });

router.get('/view', async (req,res)=>{
  try {
    const eventData = await Event.findAll();
    const events = eventData.map((event) => event.get({plain:true}))
    res.render("view",{events})
  }catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

router.get('/create',async (req,res) => {
  try{
    res.render("create", {logged_in:req.session.logged_in}); 
} catch(err){
  console.log(err);
  res.status(500).json(err);
}
});

router.get('/event/:id', async (req,res)=>{
try{
const eventData = await Event.findByPk(req.params.id,
  {include:
      {model:User,model:Parti},
    }
  );
const event = eventData.get({plain:true});
console.log(event)
res.render('event',{event})
}catch{

}
})
  module.exports = router;