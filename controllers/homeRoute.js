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
  
  router.get('/:id', async (req,res) => {
    
    try {
      const projectData = await Event.findByPk(req.params.id);
      const project = projectData.get({plain: true});
      console.log(project);

      res.render('view', {project});
        
      } catch (err) {
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

router.get('/view',(req,res)=>{

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