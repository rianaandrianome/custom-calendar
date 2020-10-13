/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */

const apiUrl =
  'https://calendarevents-29450.firebaseio.com/flamelink/environments/production/content';
const auth = '?auth=EnAzj6BCK2ishRxVZseEqVAMdFC2E9ZgkLSPzSBC';

async function getAllEvents() {
  const url = `${apiUrl}/event/en-US.json/${auth}`;
  const response = await fetch(url, {
    method: 'GET',
  });

  try {
    const data = await response.json();

    return data;
  } catch (error) {
    // window.location.href = '/error_page';
    return error;
  }
}

async function addEvent(
  title: string,
  allDay: boolean,
  start: Date,
  startStr: string,
  end: Date,
  endStr: string
) {
  const addData = {
    title,
    allDay,
    start,
    startStr,
    end,
    endStr,
  };
  console.log(addData);
  const url = `${apiUrl}/event/en-US.json/${auth}`;
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(addData),
  });

  try {
    const resp = await response.json();

    return resp;
  } catch (error) {
    // window.location.href = '/error_page';
    return error;
  }
}

export { getAllEvents, addEvent };
