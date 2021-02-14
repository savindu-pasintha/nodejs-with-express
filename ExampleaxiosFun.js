import axios from 'axios';

/** Backend ek
 * //1.2 update images 
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
 */

 // front end ek
const axiosFunc = (url, id, imgvalue) => {
  //url = "http://localhost:3001/one";
  //id=1;
  //imgvalues=val.variablename;  
  axios.post(url, { id: id, img1:imgvalue})
  .then((response) => {
   // console.log(response);
    console.log(response);
  })
  .catch( (error) => {
    console.log(error);
  });
} 
  
//methdo call
const uploadimageonebtn = (e) => {
   console.log(val.carosalone);
   var url = "http://localhost:3001/homepagecarasalimg1";
   var id = 1;
   const imgvalue = val.carosalone;
   axiosFunc(url, id, imgvalue);

}

