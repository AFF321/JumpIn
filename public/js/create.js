$(document).ready(function () {

    let eventName = $('#inputEventName').val();
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

    const createFormHandle = async (event) => {
        event.preventDefault();

        const response = await fetch('/api/event', {
            method: 'POST',
            body: JSON.stringify({ eventName, hostName, eventDate,eventType, eventDescr, localeName, address, eventCity, eventState, eventZip, inviteEmails}),
            headers: { 'Content-Type': 'application/json' },
          });
      
          if (response.ok) {
            alert('Your Event has been created!')
          } 
    }

})

$('submit').on("click", function() { createFormHandler(); });
