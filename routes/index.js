var express = require('express');
var router = express.Router();
const emp=require("../model/emModel");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

router.get('/rg', function(req, res, next) {
  res.render('rg', { title: 'Express' });
});

router.post('/rg',async function(req, res, next) {
  try {
    const a= await new emp(req.body);
    await a.save();
    res.redirect("/show")
    
  } catch (error) {
    res.send(error)
  }
  
});

router.get('/show', async function(req, res, next) {
 try {
  const b=await emp.find();
  res.render("show",{b:b})
  
 } catch (error) {
  res.send(error)
 }
});


router.get('/explore/:id', async function(req, res, next) {
  try {
   const d=await emp.findById(req.params.id)
   res.render("ex",{d:d})
   
  } catch (error) {
   res.send(error)
  }
 });
 
 router.get('/delete/:id', async function(req, res, next) {
try {

  await emp.findByIdAndDelete(req.params.id);
  res.redirect('/show');
  
} catch (error) {
  res.send(error)
}
});
router.get('/update/:id', async function(req, res, next) {
  try {
  
  const f =  await emp.findById(req.params.id);
    res.render('update',{f:f});
    
  } catch (error) {
    res.send(error)
  }

});


router.post('/update/:id', async function(req, res, next) {
  try {
  
   await emp.findByIdAndUpdate(req.params.id,req.body);
    res.redirect('/show');
    
  } catch (error) {
    res.send(error)
  }

});
module.exports = router;
