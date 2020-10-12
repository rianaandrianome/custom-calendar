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
  Dropdown,
} from '@fluentui/react-northstar';

import { CloseIcon } from '@fluentui/react-icons-northstar';

import { sampleEvents, emptyEvent, timeSlots } from '../sampleData';

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
    },
    {
      label: 'Début',
      name: 'start',
      id: 'start-field',
      key: 'start',
      required: true,
      control: {
        as: Input,
      },
      type: 'date',
      placeholder: 'dd-mm-yyyy',
    },
    {
      label: {
        content: `Heure de début:`,
        id: 'start-time',
      },
      name: 'start-time',
      key: 'start-time',
      id: 'start-time',
      control: {
        as: Dropdown,
        items: timeSlots,
        'aria-labelledby': 'start-time',
        search: true,
        placeholder: '--:--',
        searchInput: {
          id: 'start-time',
        },
        id: undefined,
      },
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
    },
    {
      label: {
        content: `Heure de fin:`,
        id: 'end-time',
      },
      name: 'end-time',
      key: 'end-time',
      id: 'end-time',
      control: {
        as: Dropdown,
        items: timeSlots,
        'aria-labelledby': 'end-time',
        search: true,
        placeholder: '--:--',
        searchInput: {
          id: 'end-time',
        },
        id: undefined,
      },
    },
    {
      control: {
        as: Button,
        content: 'Ajouter',
      },
      key: 'submit',
    },
  ];

  let popupContent;
  if (eventDetails !== emptyEvent) {
    console.log(eventDetails);
    popupContent = (
      <div className="popupAddEvent">
        <Flex gap="gap.small" fill hAlign="end">
          <Button
            icon={<CloseIcon />}
            iconOnly
            title="Close"
            onClick={closePopup}
            className="btn-close"
          />
        </Flex>
        <Header as="h2" content="Ajouter une Réunion" />
        <p>{`Pour la date du: ${new Date(eventDetails.start).toLocaleDateString(
          'fr-FR'
        )}`}</p>
        <Form
          onSubmit={() => {
            alert('Réunion ajoutée');
          }}
          fields={fields}
        />
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
