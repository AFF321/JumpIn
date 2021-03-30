const sendmail = require('../../sendmail')();

const inviteEmails = document.querySelector('#inputEmails').value;
console.log(inviteEmails);

//api call to get event id that was just made to use in html file
const email = async () =>{
    try {
        let response = await fetch(`api/event/${id}`) 
        .then(response => response.json());
       
        sendmail({
            from: 'no-reply@JumpIn.com',
            to: 'chelseymorris91@yahoo.com, chelseymorris001@gmail.com',
            subject: 'You Have Been Invited!',
            html: `<h1>You've Been Invited to An Event on JumpIn</h1>
            <a href="/event/${id}">
            <p>${event_name}</p>
            <p>${event_host}</p>
            <p>${description}</p>
            <p>${event_date}</p>
            <p>${event_address}</p>
            <p>${event_city}</p>
            <p>${event_state}</p>
            <p>${event_zip}</p>
           </a> `,
        },
           function(err, reply) {
            console.log(err && err.stack);
            console.dir(reply);
        });
    }
    catch (err) {
        console.log(err)
    }
}



document.querySelector(".event-form").addEventListener("submit", email)