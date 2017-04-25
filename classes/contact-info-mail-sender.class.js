module.exports = class ContactInfoMailSender {

	constructor(app){
		let nodeMailer = require("nodemailer");
		// We will need to require the node-mailer here

		let transporter = nodeMailer.createTransport({
		    service: 'gmail',
		    auth: {
		        user: 'parallaxen@gmail.com',
		        pass: 'SUW16angular'
		    }
		});

		app.post('/register-contact-info', (req,res) => {

			let jsonText = JSON.stringify(req.body);

			var message = {

			    // Comma separated list of recipients
			    to: 'david.bottiger@gmail.com',

			    // Subject of the message
			    subject: 'This person would like to be contacted by us ' + jsonText,

			    // plaintext body
			    text: 'Contact: ' + jsonText,

			    // HTML body
			    html: '<p>Contact: <b>' + jsonText + '</b></p>'
			};

			// send mail with defined transport object
			transporter.sendMail(message, (error, info) => {
			    if (error) {
			        return console.log(error);
			    }
			});
			// req.body contains info to send via mail
			// now - go look up the node-mailer documentation

            res.json({ok:true});
        });
	}

}

