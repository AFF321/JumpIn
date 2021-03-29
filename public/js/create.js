
    function createFormHandle (event) {
        event.preventDefault();
        const eventName = document.querySelector('#inputEventName').value.trim();
        const hostName = document.querySelector('#inputHostName').value.trim();
        const eventType = document.querySelector('#inputEventType').value;
        const eventDate = document.querySelector('#eventDate').value;
        const eventDescr = document.querySelector('#eventDescription').value.trim();
        const address = document.querySelector('#inputStreetAddress').value.trim().toUpperCase();
        const localeName = document.querySelector('#inputLocationName').value.trim();
        const eventCity = document.querySelector('#inputCity').value.trim();
        const eventState = document.querySelector('#inputState').value;
        const eventZip = document.querySelector('#inputzip').value.trim();
        const inviteEmails = document.querySelector('#inputEmails').value;
        



        console.log(eventName, hostName, eventType, eventDate, eventDescr, address, localeName, eventCity,eventState, eventZip, inviteEmails);
        // const response = JSON.stringify({eventCity, eventDate, eventDescr})
        // localStorage.saveItem("response", response)
        // const response = await fetch('/api/event', {
        //     method: 'POST',
        //     body: JSON.stringify({ eventName, hostName, eventDate,eventType, eventDescr, localeName, address, eventCity, eventState, eventZip, inviteEmails}),
        //     headers: { 'Content-Type': 'application/json' },
        //   });
      
        //   if (response.ok) {
        //     alert('Your Event has been created!')
        //   } else {
        //       alert('failureeee')
        //   }
    }

   
    document.querySelector(".event-form").addEventListener("submit", createFormHandle)


