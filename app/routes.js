//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)


router.post('/public-facing/address-uk', function(request, response) {

    var address = request.session.data['address']
    if (address == "Yes"){
        response.redirect("/public-facing/address-uk")
    } else {
        response.redirect("/public-facing/address-int")
    }
})