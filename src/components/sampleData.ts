const sampleEvents = [
  {
    title: 'All Day Event',
    start: '2020-10-12',
  },
  {
    title: 'Gym',
    start: '2020-10-14T10:00:00',
    end: '2020-10-14T11:00:00',
  },
  {
    title: 'Conference',
    start: '2020-10-15T09:00:00',
    end: '2020-10-15T10:00:00',
  },
  {
    title: 'Meeting',
    start: '2020-10-16T10:00:00',
    end: '2020-10-16T10:30:00',
  },
  {
    title: 'Lunch',
    start: '2020-10-16T12:00:00',
    end: '2020-10-16T12:30:00',
  },
  {
    title: 'Meeting',
    start: '2020-10-16T11:00:00',
    end: '2020-10-16T12:00:00',
  },
];

const emptyEvent = {
  dateStr: '',
  start: '',
  end: '',
  startStr: '',
  endStr: '',
  allDay: false,
};
export { sampleEvents, emptyEvent };
