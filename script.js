const dayOfWeekEl = document.getElementById('dayOfWeek')
const utcEl = document.getElementById('utcTime')

// method of dispalying day of the week
const dayOfWeek = [
 'Sunday',
 'Monday',
 'TuesDay',
 'Wednesday',
 'Thursday',
 'Friday',
 'Saturday',
]
const date = new Date()

function updateUtcTime() {
 const date = new Date()
 const hours = date.getUTCHours()
 const minutes = date.getUTCMinutes()
 const milliseconds = date.getUTCMilliseconds()
 const getCurrentDay = dayOfWeek[date.getDay()]

 dayOfWeekEl.innerText = getCurrentDay
 utcEl.innerText = `${hours}:${minutes}:${milliseconds}`
 setTimeout(() => {
  updateUtcTime()
 }, 1000)
}
updateUtcTime()

// const utc = date.toUTCString()

// display the utc time to dom
