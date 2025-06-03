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


// url here should be to the page that is doing the routing
router.post('/public-facing/work-places', function (req, res) {
    // Get the answer from session data
    // the checkbox answer data saved as the name attribute, in this case work-places
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // Javascript doesn't support hyphens ('-') in variable names (like formValue)

    let formValue = req.session.data['work-places']
// if the variable "work-places"...
    // contains the word Hospital
    if (formValue.includes('Hospitals')) {
    // then redirect to hospital page
        res.redirect('/public-facing/hospitals')
    } else {
    // otherwise, hospitals has not been selected so redirect to CYA page
      res.redirect('/public-facing/cya-work-places')
    }
  })


router.post('/public-facing/birth-date', function (req, res) {
    const { firstName, lastName } = req.body;

    if (!firstName || firstName.trim() === '' || !lastName || lastName.trim() === '') {
        res.redirect('/public-facing/personal-details-error');
    } else {
        req.session.data['first-name'] = firstName;
        req.session.data['last-name'] = lastName;
        res.redirect('/public-facing/birth-date');
    }
})
