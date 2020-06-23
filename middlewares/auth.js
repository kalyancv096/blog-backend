let routeHandler= require('../Libs/responseLib')
let isAuthenticated = (req, res, next) => {
    console.log('auth middleware')
    if (req.params.authToken || req.query.authToken) {
        if (req.params.authToken == 'admin' || req.query.authToken == 'admin') {
            next()
        }
        else {
       let apiResponse=routeHandler.generate(true, "Invalid authentication token", 404, null)
       res.send(apiResponse)
        }
    }
    else { 
        console.log('inside else')
  let apiResponse= routeHandler.generate(true, "Authentication token is missing", 500, null)
 res.send(apiResponse)
    }
    
}
module.exports = {
    isAuthenticated: isAuthenticated
}