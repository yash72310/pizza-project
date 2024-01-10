const Contact=require('../../models/contact')

function contactController() {
    
    return {
        contact(req, res) {
            res.render('auth/contact')
        },
        postContact(req, res) {
            const { name, email, mobile }   = req.body
            const contact = new Contact({
                name,
                email,
                mobile
            })
   
            contact.save().then((contact) => {
               return res.redirect('/')
            }).catch(err => {
               req.flash('error', 'Something went wrong')
                   return res.redirect('/')
            })
           },
    }
}

module.exports=contactController