let projectController = {

    jardin: (req, res) =>{
        res.render('Jardin');
    },
    gif: (req, res) =>{
        res.render('GifGenerator');
    },
    relojes: (req, res) =>{
        res.render('relojesRonin');
    },
    portfolio:(req, res) =>{
        res.render('Portfolio');
    }
    
}   
module.exports = projectController