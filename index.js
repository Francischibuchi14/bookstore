// storing attendees
let attendees = [];

// adding a new attendee
function addAttendee() {
    let attendeeInput = document.getElementById('attendeeName').value.trim().toUpperCase();

    if (attendeeInput === "") {
        alert("Please enter a valid name.");
        return;
    }

    if (attendees.includes(attendeeInput)) {
        alert("Attendee is already on the list.");
    } else {
        attendees.push(attendeeInput);
        alert(attendeeInput + " has been added.");
    }
    document.getElementById('attendeeName').value = ""
}

// searching for an attendee
function findAttendee() {
    let searchInput = document.getElementById('searchAttendeeName').value.trim().toUpperCase()
    
    if (searchInput === "") {
        alert("Please enter a name to search.")
        return
    }

    let index = attendees.indexOf(searchInput)
    if (index !== -1) {
        alert(searchInput + " found at position " + (index + 1))
    } else {
        alert(searchInput + " not found.")
    }
    document.getElementById('searchAttendeeName').value = ""
}

// listing all attendees
function listAttendees() {
    let output = document.getElementById('output')
    if (attendees.length > 0) {
        output.innerHTML = "Attendees: " + attendees.join(', ')
    } else {
        output.innerHTML = "No attendees found."
    }
}

// removing an attendee
function removeAttendee() {
    let removeInput = document.getElementById('removeAttendeeName').value.trim().toUpperCase()

    if (removeInput === "") {
        alert("Please enter a name to remove.")
        return;
    }

    let index = attendees.indexOf(removeInput)
    if (index !== -1) {
        attendees.splice(index, 1)
        alert(removeInput + " has been removed.")
    } else {
        alert(removeInput + " not found.")
    }
    document.getElementById('removeAttendeeName').value = ""
}

document.getElementById('addAttendeeBtn').addEventListener('click', addAttendee)
document.getElementById('searchAttendeeBtn').addEventListener('click', findAttendee)
document.getElementById('listAttendeesBtn').addEventListener('click', listAttendees)
document.getElementById('removeAttendeeBtn').addEventListener('click', removeAttendee)