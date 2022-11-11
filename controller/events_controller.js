module.exports.events = async function (req,res) {
    try {
        return res.render('events',{
            title:'Events',
        })
    } catch (error) {
        console.log("Error",error);
        return;
    }
}