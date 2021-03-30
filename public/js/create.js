
    const createFormHandle = async (event) => {
        event.preventDefault();
        const events = {};

        events.event_name = document.querySelector('#inputEventName').value.trim();
        events.host_name = document.querySelector('#inputHostName').value.trim();
        events.type = document.querySelector('#inputEventType').value;
        events.event_date = document.querySelector('#eventDate').value;
        events.description = document.querySelector('#eventDescription').value.trim();
        events.event_address = document.querySelector('#inputStreetAddress').value.trim().toUpperCase();
        events.event_city = document.querySelector('#inputCity').value.trim();
        events.event_state = document.querySelector('#inputState').value;
        events.event_zip = document.querySelector('#inputZip').value.trim();
        
        const inviteEmails = document.querySelector('#inputEmails').value.split(",");

        console.log(inviteEmails);
        
        // if(!eventName){
        //     alert('Please fill out Event Name field')
        // } else {
        //     inputs.push(eventName);
        // };
        
        // if (!hostName) {
        //     return
        // } else {
        //     inputs.push(hostName)
        // };

        // if (!eventType) {
        //     return 
        // } else {
        //     inputs.push(eventType)
        // }
        
        // if (!eventDate) {
        //     return
        // } else {
        //     inputs.push(eventDate)
        // };

        // if (!eventDescr) {
        //     return
        // } else {
        //     inputs.push(eventDescr)
        // };

        // if (!address) {
        //     alert('Please fill out address field')
        // } else {
        //     inputs.push(address)
        // };

        // if (localeName) {
        //     return
        // } else {
        //     inputs.push(localeName)
        // };

        // if (!eventCity) {
        //     alert('Please fill out City field')
        // } else {
        //     inputs.push(eventCity)
        // };

        //  if (!eventState) {
        //     alert('Please fill out State field')
        // } else {
        //     inputs.push(eventState)
        // };

        // if (!eventZip) {
        //     alert('Please fill out Zip code field')
        // } else {
        //     inputs.push(eventZip)
        // };

        // if (!inviteEmails) {
        //     return
        // } else {
        //     inputs.push(inviteEmails)
        // };

        // console.log(inputs)

        var response = await fetch('/api/event', {
            method: 'POST',
            body: JSON.stringify(events),
            headers: { 'Content-Type': 'application/json' },
          });
      
          if (response.ok) {
            alert('Your Event has been created!')
          } else {
              alert('failedddd')
          }
    }

   
    document.querySelector(".event-form").addEventListener("submit", createFormHandle)


