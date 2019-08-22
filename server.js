const nodemailer        =       require('nodemailer')
const smtpTransport     =       require('nodemailer-smtp-transport');

const transporter = nodemailer.createTransport( smtpTransport ({
    
    host               :        "smtp.gmail.com",
    secureConnection   :         false,
    port               :         587,
    requiresAuth       :         true,        
    domains            :        ["gmail.com", "googlemail.com"],
    auth               :       {
                                user : "email-id",            //give your email id and password make
                                                            // sure it does not have active two way authentication
                                pass : "password"
                                },
    tls                :       {
                               rejectUnauthorized:false   
                               }
}))

const mailOptions = {
    to      :   "source email id",             //the email id from above
    from    :   "destination email-id",       //receiver email id
    subject :    "hello from kanchan",
    html    :   `<p>good to see you</p>`,
    text    :   'that was easy'
}

transporter.sendMail( mailOptions, (err,info) =>{
   
    if(err) {
            console.log(err)
    }   else   {
        console.log(info)
    }
})