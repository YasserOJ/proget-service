var mongoose= require('mongoose');
var con =mongoose.connect('mongodb://yasser:yasser@localhost:27017/proget_db?authMechanism=SCRAM-SHA-1',function (err) {

    if(err) throw  err;

    console.log("DB is Working")
});
exports.getConnection=function () {
    return(con);
}