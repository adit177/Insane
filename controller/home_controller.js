module.exports.home = async function (req,res) {
    try {
        return res.render('home',{
            title:'Succes',
        })
    } catch (error) {
        console.log("Error",err);
        return;
    }
}


