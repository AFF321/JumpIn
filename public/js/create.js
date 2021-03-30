
    const createFormHandle = async (event) => {
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
        const eventZip = document.querySelector('#inputZip').value.trim();
        const inviteEmails = document.querySelector('#inputEmails').value.split(",");

        // let inputs = []
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

        console.log(eventName, hostName, eventType, eventDate, eventDescr, address, localeName, eventCity,eventState, eventZip, inviteEmails);

        if(eventName && hostName && eventType && eventDescr && eventDate && address && eventCity && eventState && eventZip)
       
        var response = await fetch('/api/event', {
            method: 'POST',
            body: JSON.stringify({ event_name, host_name, type, description, event_date, event_address, event_city, event_state, event_zip}),
            headers: { 'Content-Type': 'application/json' },
          });
      
          if (response.ok) {
            alert('Your Event has been created!')
          } else {
              alert('failureeee')
          }
    }

   
    document.querySelector(".event-form").addEventListener("submit", createFormHandle)


