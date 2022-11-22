module.exports.home = async function (req,res) {
    try {
        return res.render('home',{
            title:'IISF KNIT Sultanpur',
        })
    } catch (error) {
        console.log("Error",err);
        return;
    }
}


