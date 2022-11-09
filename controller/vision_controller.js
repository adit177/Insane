module.exports.vision = async function (req,res) {
    try {
        return res.render('vision',{
            title:'Vision',
        })
    } catch (error) {
        console.log("Error",err);
        return;
    }
}


