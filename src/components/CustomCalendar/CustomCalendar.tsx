/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';

import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import frLocale from '@fullcalendar/core/locales/fr';
import allLocales from '@fullcalendar/core/locales-all';

import { Popup, Button, Input } from '@fluentui/react-northstar';

import { CloseIcon } from '@fluentui/react-icons-northstar';
import { emptyEvent } from '../sampleData';

import { getAllEvents, addEvent } from '../functions';

import './CustomCalendar.scss';

export default function CustomCalendar() {
  const [showPopup, setShowPopup] = useState(false);
  const [eventDetails, setEventDetails] = useState(emptyEvent);
  const [allEvents, setAllEvents] = useState({});

  // #region State variable for input change
  const [title, setTitle] = useState('');
  const [allDay, setAllDay] = useState('');
  const [start, setStart] = useState(new Date(eventDetails.startStr));
  const [end, setEnd] = useState(new Date(eventDetails.endStr));

  // #endregion

  const fetchAll = () => {
    const res = getAllEvents();
    res.then((response) => {
      const eventList = Object.values(response).map((e: any) => {
        delete e._meta_;
        delete e.id;
        delete e.order;
        delete e.parentId;
        return e;
      });
      setAllEvents(eventList);
    });
  };
  useEffect(() => {
    fetchAll();
  }, []);

  // #region CALENDAR CUSTOMIZATION
  const headerToolbar = {
    start: 'prev,next today',
    center: 'title',
    end: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
  };

  const dayHeaderFormat = {
    weekday: 'long',
  };

  // #region  Handle cell clicks
  const handleAddEvent = (cellData: any) => {
    setShowPopup(true);
    setEventDetails(cellData);
  };

  const handleEditEvent = () => {
    alert('Modifier une Réunion');
  };

  const handleDateClick = () => {};

  // #endregion

  // #region Handle input change
  const handleTitle = (event: any) => {
    setTitle(event.target.value);
  };
  const handleAllDay = (event: any) => {
    setAllDay(event.target.value);
  };
  const handleStart = (event: any) => {
    setStart(event.target.value);
  };
  const handleEnd = (event: any) => {
    setEnd(event.target.value);
  };

  // #endregion

  const closePopup = () => {
    setShowPopup(false);
  };

  // #region Popup form submission
  const submitAddEvent = (event: any) => {
    event.preventDefault();

    const bAllDay = allDay === 'true';

    const resAdd = addEvent(
      title,
      bAllDay,
      new Date(start),
      start.toString(),
      new Date(end),
      end.toString()
    );
    resAdd.then((response) => {
      setShowPopup(false);
      fetchAll();
    });
  };

  // #endregion

  // #region POPUP content
  let popupContent;
  if (eventDetails !== emptyEvent) {
    popupContent = (
      <div className="popupAddEvent">
        <Button
          icon={<CloseIcon />}
          iconOnly
          title="Close"
          onClick={closePopup}
          className="btn-close"
        />
        <h2>Ajouter une Réunion</h2>
        <p>{`Pour la date du: ${new Date(eventDetails.start).toLocaleDateString(
          'fr-FR'
        )}`}</p>
        <form onSubmit={submitAddEvent}>
          <Input fluid label="Title" required onBlur={handleTitle} />
          <Input
            label="Toute la journée"
            type="checkbox"
            onBlur={handleAllDay}
            className="allDayCk"
          />
          <Input
            fluid
            required
            label="Date et Heure de début"
            onBlur={handleStart}
            placeholder="YYYY/MM/DD HH:MM:SS"
          />
          <Input
            fluid
            required
            label="Date et heure de Fin"
            placeholder="YYYY/MM/DD HH:MM:SS"
            onBlur={handleEnd}
          />
          <Button content="Ajouter" fluid primary className="btnSubmit" />
        </form>
      </div>
    );
  } else {
    popupContent = null;
  }

  // #endregion

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
        locales={allLocales}
        locale={frLocale}
        dateClick={handleDateClick}
        select={handleAddEvent}
        dayMaxEvents
        selectable
        timeZone="UTC"
        dayHeaderFormat={dayHeaderFormat}
        events={allEvents}
        eventClick={handleEditEvent}
      />
    </>
  );
}
