
    const eventName = document.querySelector('#inputEventName').value.trim();
    const hostName = document.querySelector('#inputHostName').value.trim();
    const eventType = document.querySelector('#inputEventType').value.trim();

    // let eventName = $('#inputEventName').val();
    let hostName = $('#inputHostName').val();
    let eventDate = $('#eventDate').val();
    let eventType = $('#inputEventType').val();
    let eventDescr = $('#eventDescription').val();
    let localeName = $('#inputLocationName').val();
    let address = $('#inputStreetAddress').val();
    let eventCity = $('#inputCity').val();
    let eventState = $('#inputState').val();
    let eventZip = $('#inputZip').val();
    let inviteEmails = $('#inputEmails').val();

    
   
    function createFormHandle (event) {
        event.preventDefault();

        console.log(eventName, hostName, eventType);
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


