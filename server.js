var express=require('express');
var app=express();
app.get('/',(function(req,res){
	res.sendFile('C:\\Users\\s516936\\Desktop\\UXD\\UXD_FP_S1_T3\\templates\\index.html');
}));
app.listen(8080, () => console.log(`App listening on port 8080!`))