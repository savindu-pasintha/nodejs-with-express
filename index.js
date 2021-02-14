var express = require('express');// import first express modules
var mysql = require('mysql');//import
var cors = require('cors');// Prevent the HTTPS CORS error
var fileUpload = require('express-fileupload');
//var bc = require('./backendmysqlnodejs');
var app = express(); //instance create
var port = 3001;//dynamic port number set to run the server files.


app.use(cors());//// Prevent the HTTPS CORS error
//app.use(express.json());// front eken ewn data convert kala json vidiyt nattn ew read krnn bh undifind kiyl enw

///file size limite erro
app.use(express.json({ limit: '25mb' }));
//app.use(express.urlencoded({ limit: '25mb' }));

//app.use(fileUpload);

//mysql Datatbase create connection
var con = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "reactmysqldatabase"//database name
});

//Default route
app.get('/', function (req, res) {
  res.send('Default route');
});

//express-fileupload methods
app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: " No file uploaded .!" });
  }
  const file = req.files.file;
  file.mv('${_dirname}/client/public/server/public/uploads/${file.name}',err=>{
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath:'/uploads/${file.name}' })
  });
});

//ROUTES CREATE
//req == request is the oy url ekedi web page ekt load wen data catch kr gann thinne ok.. apit oni variable assign krn
//res == responce okedi karanne apit oni vidiydweb page ekt data pas krnn puluwn
// respond with "hello world" when a GET request is made to the homepage
//1.1
app.post('/photo', function (req, res) {

   //req.send(json({name: "ddsdsdsd"}));// console loged the front end send data
 // res.send('this is a server page');
  //catch and assign the webpage printed values
  const img1 = res.body.one;
  const img2 = res.body.two;
  const img3 = res.body.three;
  const img4 = res.body.four;
  const img5 = res.body.five;

  const array = [];
  array[0] = img1;
  array[1] = img2;
  array[2] = img3;
  array[3] = img4;
  array[4] = img5;
  array[5] = res.body.id;
  //const array= [img1,img2,img3,img4,img5]; another way

  //mysql insert query
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO websiteimagetable (homepagecarasalimg1, homepagecarasalimg2, homepagecarasalimg3, startjurneyimg, aboutuspageimg , id) VALUES (?,?,?,?,?,?) ";
    con.query(sql, array, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      res.send("Values inserted");
    });
  });//end mysql insert
});

//1.2 update images
app.put('/homepagecarasalimg1', function (req, res) {

  console.log(req.body);// console loged the front end send data
  res.send('this is a server page');
  //catch and assign the webpage printed values
  const img1 = res.body.one;
  const array = [];
  array[0] = img1;
  array[1] = res.body.id;//id=1

  //const array= [img1,img2,img3,img4,img5]; another way
  //mysql insert query
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "UPDATE websiteimagetable SET homepagecarasalimg1 = ?  WHERE id = ?";
    con.query(sql, array, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      res.send("Values updated");
    });
  });//end mysql insert
});
//1.3 update
app.put('/homepagecarasalimg2', function (req, res) {

  console.log(req.body);// console loged the front end send data
  res.send('this is a server page');
  //catch and assign the webpage printed values
  const img1 = res.body.one;
  const array = [];
  array[0] = img1;
  array[1] = res.body.id//id=1
  //const array= [img1,img2,img3,img4,img5]; another way
  //mysql insert query
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = " UPDATE websiteimagetable SET homepagecarasalimg2 = ? WHERE id = ? ";
    con.query(sql, array, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      res.send("Values updated");
    });
  });//end mysql insert
});
//1.4 update
app.put('/homepagecarasalimg3', function (req, res) {

  console.log(req.body);// console loged the front end send data
  res.send('this is a server page');
  //catch and assign the webpage printed values
  const img1 = res.body.one;
  const array = [];
  array[0] = img1;
  array[1] = res.body.id//id=1
  //const array= [img1,img2,img3,img4,img5]; another way
  //mysql insert query
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "UPDATE websiteimagetable SET homepagecarasalimg3 = ?  WHERE id = ?";
    con.query(sql, array, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      res.send("Values updated");
    });
  });//end mysql insert
});
//1.5 update
app.put('/startjurneyimg', function (req, res) {

  console.log(req.body);// console loged the front end send data
  res.send('this is a server page');
  //catch and assign the webpage printed values
  const img1 = res.body.one;
  const array = [];
  array[0] = img1;
  array[1] = res.body.id//id=1
  //const array= [img1,img2,img3,img4,img5]; another way
  //mysql insert query
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "UPDATE websiteimagetable SET  startjurneyimg = ?  WHERE id = ?";
    con.query(sql, array, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      res.send("Values updated");
    });
  });//end mysql insert
});
//1.6 update
app.put('/aboutuspageimg', function (req, res) {

  console.log(req.body);// console loged the front end send data
  res.send('this is a server page');
  //catch and assign the webpage printed values
  const img1 = res.body.one;
  const array = [];
  array[0] = img1;
  array[1] = res.body.id//id=1
  //const array= [img1,img2,img3,img4,img5]; another way
  //mysql insert query
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "UPDATE websiteimagetable SET aboutuspageimg = ? WHERE id = ?";
    con.query(sql, array, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      res.send("Values updated");
    });
  });//end mysql insert
});

//database data retrive
app.get("/getimagedata", (req, res) => {
  con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM websiteimagetable ", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);// send data to frontend console
      }
    });
  });
});

//database data retrive
app.get("/getlogdata", (req, res) => {
  con.connect(function (err) {
    if (err){throw err;} 
    con.query("SELECT * FROM login ", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);// send data to frontend console
      }
    });
  });
});

//database data retrive
app.get("/getregdata", (req, res) => {
  con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM registertable ", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);// send data to frontend console
      }
    });
  });
});

//database data retrive
app.get("/getupcommingtabledata", (req, res) => {
  con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM upcommingtable ", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);// send data to frontend console
      }
    });
  });
});

//database data retrive
app.get("/getmaterialtabledata", (req, res) => {
  con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM materialtable ", (err, result) => {
      if (err) { console.log(err); }
      else { res.send(result); }// send data to frontend console
    });
  });
});

//4 http://localhost:${port}/register  post -> send another use
app.post('/reg', function (req, res) {

  //catch the values
  //console.log();// view the  front end data in web page
  const username = req.body.username;
  const password = req.body.password;
  const comfrim = req.body.comfrim;

  //execute insert function
  //bc.registeruserFun([username, password, comfrim]);
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO registertable (username,password,comfrimpassword) VALUES (?,?,?) ";
    var values = [username, password, comfrim];//values assign 
    con.query(sql, values, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      alert("inserted");
      res.send("DB to Values Inserted");
    });
  });
  // res.send('TWO')
});

//4 http://localhost:${port}/log
app.put('/log', function (req, res) {

  //catch the values
  const username = req.body.username;
  const password = req.body.password;

  //mysql nodejs
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO login (username,password) VALUES (?,?) ";
    var values = [username, password];//values assign 
    con.query(sql, values, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      alert("inserted");
      res.send("DB to Values Inserted");
    });
  });
  // res.send('TWO')
});

//4 http://localhost:${port}/log
app.put('/one', function (req, res) {

  //catch the values
  const username = req.body.username;
  const password = req.body.password;

  //mysql nodejs
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO login (username,password) VALUES (?,?) ";
    var values = [username, password];//values assign 
    con.query(sql, values, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      alert("inserted");
      res.send("DB to Values Inserted");
    });
  });
  // res.send('TWO')
});


//server run port set
/**
    * app.listen(portnumber,function)
    */
app.listen(port, () => {
  console.log(`server is runing correctly. Example app listening at http://localhost:${port}`);
});