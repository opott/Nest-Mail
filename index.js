const mailer = require('nodemailer');
const readline = require('readline-sync');

async function sendMessage({ user, pass, to, subject, text, logs}) {
    const transporter = mailer.createTransport({
        host: 'hackclub.app',
        port: 587,
        secure: false,
        auth: {
            user,
            pass,
        },
    });
    
    const message = {
        from: `${user}@hackclub.app`,
        to,
        subject,
        text,
    };
    
    await transporter.sendMail(message, (error, info) => {
        if (logs) {
            if (error) {
            console.error(error);
            } else {
            console.info(info.response);
            }
        }
    });
}

async function interactiveMessage({ logs }) {
    let user = readline.question("Enter your Nest username: ");
    let pass = readline.question("Enter your Nest password: ");

    const transporter = mailer.createTransport({
        host: 'hackclub.app',
        port: 587,
        secure: false,
        auth: {
            user,
            pass,
        },
    })

    const to = readline.question("Enter the recipient's email address: ");
    const subject = readline.question("Enter the subject of the email: ");
    const text = readline.question("Enter the body of the email: ");

    const message = {
        from: `${user}@hackclub.app`,
        to,
        subject,
        text,
    }

    await transporter.sendMail(message, (error, info) => {
        if (logs) {
            if (error) {
            console.error(error);
            } else {
            console.info(info.response);
            }
        }
    });

}

module.exports = { sendMessage, interactiveMessage };