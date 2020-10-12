import React, { useState } from 'react';

import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import frLocale from '@fullcalendar/core/locales/fr';
import allLocales from '@fullcalendar/core/locales-all';

import {
  Popup,
  Button,
  Input,
  Flex,
  Header,
  Form,
} from '@fluentui/react-northstar';

import { sampleEvents, emptyEvent } from '../sampleData';

import './CustomCalendar.scss';

export default function CustomCalendar() {
  const [showPopup, setShowPopup] = useState(false);
  const [eventDetails, setEventDetails] = useState(emptyEvent);

  const headerToolbar = {
    start: 'prev,next today',
    center: 'title',
    end: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
  };

  const dayHeaderFormat = {
    weekday: 'long',
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const fields = [
    {
      label: 'Title',
      name: 'title',
      id: 'title-field',
      key: 'title',
      required: true,
      control: {
        as: Input,
        showSuccessIndicator: false,
      },
      inline: true,
    },
    {
      label: 'Start',
      name: 'start',
      id: 'start-field',
      key: 'start',
      required: true,
      control: {
        as: Input,
      },
      type: 'date',
      inline: true,
    },
    {
      label: 'End',
      name: 'end',
      id: 'end-field',
      key: 'end',
      required: true,
      control: {
        as: Input,
      },
      type: 'date',
      inline: true,
    },
  ];

  let popupContent;
  if (eventDetails !== emptyEvent) {
    console.log(eventDetails);
    popupContent = (
      <div className="popupAddEvent">
        <Header as="h2" content="Add Event" />
        <p>{eventDetails.startStr}</p>
        <Form
          onSubmit={() => {
            alert('Form submitted');
          }}
          fields={fields}
        />

        <Flex gap="gap.small" fill>
          <Flex.Item>
            <Button content="Cancel" onClick={closePopup} />
          </Flex.Item>
          <Flex.Item>
            <Button primary content="Add" />
          </Flex.Item>
        </Flex>
      </div>
    );
  } else {
    popupContent = null;
  }

  const handleDateSelect = (cellData: any) => {
    setShowPopup(true);
    setEventDetails(cellData);
  };

  const handleDateClick = () => {};

  return (
    <>
      {showPopup ? (
        <Popup
          open={showPopup}
          trigger={
            <Button
              className="addEvent"
              content="Add event"
              aria-label="Add an event"
            />
          }
          content={{
            content: popupContent,
            'aria-label': 'People picker',
          }}
          trapFocus
        />
      ) : null}
      <FullCalendar
        plugins={[interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin]}
        initialView="dayGridMonth"
        headerToolbar={headerToolbar}
        editable
        locales={allLocales}
        locale={frLocale}
        dateClick={handleDateClick}
        select={handleDateSelect}
        dayMaxEvents
        selectable
        timeZone="UTC"
        dayHeaderFormat={dayHeaderFormat}
        events={sampleEvents}
      />
    </>
  );
}
