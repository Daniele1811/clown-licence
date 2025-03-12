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
router.post('/work-places-route', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // Javascript doesn't support hyphens ('-') in variable names (like formValue)

    let formValue = req.session.data['/work-places']

    if (formValue.includes('Hospitals')) {
      res.redirect('/hospitals')
    } else {
      res.redirect('/cya-work-places')
    }
  })  