var mysql = require('mysql');// import mysql libraries
//import  mysql from "mysql";
// declare connection variabl
    var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "reactmysqldatabase"
  });
//registerdatasave

//upcomming class change function
function registeruserFun(values) {
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO registertable (username,passsword,comfrimpassword) VALUES (?,?,?) ";
    //var values = [];//values assign 
    con.query(sql,values, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      alert("inserted");
    });
  });
}

//site photo change function
function photochange(array) {

  var mysql = require('mysql');// import mysql libraries
//import  mysql from "mysql";
// declare connection variabl
    var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "reactmysqldatabase"
  });
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO websiteimagetable (homepagecarasalimg1, homepagecarasalimg2, homepagecarasalimg3, startjurneyimg,aboutuspageimg) VALUES ? ";
    
    var values = [];// values assign
    values = array;

    con.query(sql, values, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });
}
 
//material details change function
function materialchange() {
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO materialtable (grade, subject, title, description,img,id) VALUES ? ";
    var values = [];//values assign
    
    con.query(sql, values, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });
}
 
//upcomming class change function
function upcommingclasschange() {
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO upcommingtable (id, type, grade, subject,teachername,date,time,description,img) VALUES ? ";
    var values = [];//values assign
    
    con.query(sql, values, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });
}
 
//update details
function updatephotos() {
  con.connect(function (err) {
    if (err) throw err;
    var sql = "UPDATE websiteimagetable SET homepagecarasalimg1 = '', homepagecarasalimg2 = '', homepagecarasalimg3 = '', startjurneyimg = '',aboutuspageimg = '',id = '' WHERE id = '345'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
  });
}

//update details
function updatematerials() {
  con.connect(function (err) {
    if (err) throw err;
    var sql = "UPDATE materialtable SET grade = '', subject = '', title = '', description = '',img = '',id = '' WHERE id = '345'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
  });
}

//update details
function updateupcommingclasschange() {
  con.connect(function (err) {
    if (err) throw err;
    var sql = "UPDATE upcommingtable SET id, type, grade, subject,teachername,date,time,description,img WHERE id = '345'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
  });
}

//delete details
function deletephotos() {
  con.connect(function (err) {
    if (err) throw err;
    var sql = "DELETE FROM websiteimagetable  WHERE id = '345'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
  });
}

//delete details
function deletematerials() {
  con.connect(function (err) {
    if (err) throw err;
    var sql = "DELETE FROM materialtable  WHERE id = '345'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
  });
}

//delete details
function deleteupcommingclasschange() {
  con.connect(function (err) {
    if (err) throw err;
    var sql = "DELETE FROM upcommingtable  WHERE id = '345'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
  });
}

//SELECT details
function viewphotos() {
  con.connect(function(err) {
  if (err) throw err;
  //Select all customers and return the result object:
  con.query("SELECT * FROM websiteimagetable", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
}

//SELECT details
function viewmaterials() {
 con.connect(function(err) {
  if (err) throw err;
  //Select all customers and return the result object:
  con.query("SELECT * FROM materialtable", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
}

//SELECT details
function viewupcommingclasschange() {
  con.connect(function(err) {
  if (err) throw err;
  //Select all customers and return the result object:
  con.query("SELECT * FROM upcommingtable ", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
}
        

//end the class