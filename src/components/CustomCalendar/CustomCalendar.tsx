import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export default function CustomCalendar() {
  return <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />;
}
