let renderLogin = (req, res) => {
    res.render('login',{
        flash : req.flash(),
        loggedIn : null,
        username : null
    });
}

let renderMobileLogin = (req, res) => {
    res.render('mobileLogin',{
        flash : req.flash(),
        loggedIn : null,
        username : null
    });
}

let renderSignUp = (req, res) => {
    res.render('signUp',{
        flash : req.flash(),
        loggedIn : null,
        username : null
    });
}

let renderDetails = (req, res) => {
    res.render('docProfile',{
        loggedIn : null
    });
}

let renderHome = (req, res) =>{
    res.render('index',{
        flash : req.flash(),
        loggedIn : true,
        username : req.session.name
    });
}

let renderDoctor = (req, res) => {
    res.render('doctor',{
        loggedIn : true,
        username : req.session.name
    });
}

let renderHospital = (req, res) => {
    res.render('hospital',{
        loggedIn : true,
        username : req.session.name
    });
}

let renderTreatment = (req, res) => {
    res.render('aboutTreatment',{
        loggedIn : true,
        username : req.session.name
    });
}

let renderPlus = (req, res) => {
    res.render('tvastraPlus',{
        loggedIn : true,
        username : req.session.name
    });
}


let renderAbout = (req, res) => {
    req.session.name ? res.render('aboutUs',{ loggedIn : true, username : req.session.name}) : res.render('aboutUs', { loggedIn :false, username : null});
}

let renderFaq = (req, res) => {
    req.session.name ? res.render('faq',{ loggedIn : true, username : req.session.name}) : res.render('faq', { loggedIn : false, username : null });
}




module.exports = {
    renderLogin : renderLogin,
    renderMobileLogin : renderMobileLogin,
    renderSignUp : renderSignUp,
    renderDetails : renderDetails, 
    renderHome : renderHome,
    renderDoctor : renderDoctor,
    renderHospital : renderHospital,
    renderTreatment : renderTreatment,
    renderPlus : renderPlus,
    renderAbout : renderAbout,
    renderFaq : renderFaq
}