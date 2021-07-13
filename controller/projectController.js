let projectController = {

    project: (req, res) =>{
        res.render('Jardin');
    },
    showById: (req, res) =>{
        res.render('project');
    }
}   
module.exports = projectController