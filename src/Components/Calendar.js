const createICalendarData = (eventDetails) => {
    const { eventName, eventDescription, date, time, location } = eventDetails;
  
    // Create a Date object for the event's start time in MST
    const eventDate = new Date(`${date} ${time} GMT-0700`);
  
    // Convert start date to YYYYMMDDTHHmmss format for iCalendar
    const iCalStartDate = formatToICal(eventDate);
  
    // Event end time, let's assume it lasts 2 hours
    const endDate = new Date(eventDate.getTime() + 2 * 60 * 60 * 1000);
    const iCalEndDate = formatToICal(endDate);
  
    return [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      `SUMMARY:${eventName}`,
      `DESCRIPTION:${eventDescription}`,
      `DTSTART:${iCalStartDate}`,
      `DTEND:${iCalEndDate}`,
      `LOCATION:${location}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\n');
  };
  
  const createGoogleCalendarUrl = (eventDetails) => {
    const { eventName, eventDescription, date, time, location } = eventDetails;
  
    // Create a Date object for the event's start time in MST
    const eventDate = new Date(`${date} ${time} GMT-0700`);
  
    // Format as YYYYMMDDTHHmmssZ for Google Calendar
    const startDateTimeStr = formatToGoogleCalendar(eventDate);
    const endDate = new Date(eventDate.getTime() + 2 * 60 * 60 * 1000);
    const endDateTimeStr = formatToGoogleCalendar(endDate);
  
    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: eventName,
      details: eventDescription,
      dates: `${startDateTimeStr}/${endDateTimeStr}`,
      location: location,
      trp: 'false',
      sprop: '',
      sprop: 'name:'
    });
  
    return `https://www.google.com/calendar/render?${params.toString()}`;
  };
  
  // Helper function to format dates for iCalendar
  function formatToICal(date) {
    return date.toISOString().replace(/-|:|\.\d+/g, '').replace('Z', '');
  }
  
  // Helper function to format dates for Google Calendar
  function formatToGoogleCalendar(date) {
    return date.toISOString().replace(/-|:|\.\d+/g, '');
  }
  
  // In your RSVP component, after the form is submitted and the RSVP is confirmed
  // Use the `iCalendarData` to create a download link and `googleCalendarUrl` to create a clickable link
  export const calendarUtils = {
    createICalendarData,
    createGoogleCalendarUrl
  };