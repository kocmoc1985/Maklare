

module.exports = class ContactInfoMailSender {

	constructor(app){
		app.post('/register-contact-info', (req,res) => {
			// We will need to require the node-mailer here
			let nodeMailer = require("nodemailer");
console.log("HAHA",nodeMailer)
			let transporter = nodeMailer.createTransport({
			    service: 'gmail',
			    auth: {
			        user: 'david.bottiger@gmail.com',
			        pass: 'cpapa347'
			    }
			});

			let jsonText = JSON.stringify(req.body);

			var message = {

			    // Comma separated list of recipients
			    to: 'david.bottiger@gmail.com',

			    // Subject of the message
			    subject: 'This person would like to be contacted by us ' + jsonText, //

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
			    console.log('Message %s sent: %s', info.messageId, info.response);
			});
			

		    console.log("Got some funky stuff!",req.body);
         	// req.body contains info to send via mail
			// now - go look up the node-mailer documentation


            res.json({ok:true});

            
        });

	}


}

