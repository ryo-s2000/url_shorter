import { useState } from 'react';
import axios from 'plugins/axios/config';

interface Event {
  id: number;
  event_type: string;
  event_date: string;
  title: string;
  speaker: string;
  host: string;
  published: string;
  created_at: string;
  updated_at: string;
}

const fetchEvents = async (): Promise<Event[]> => {
  const res = await axios.get('/events');
  const result = (await res.data) as Event[];
  return result;
};

const IndexPage = () => {
  const [events, setEvents] = useState([]);

  const handleClick = async () => {
    const events = await fetchEvents();
    setEvents(events);
  };

  const listItems = events.map((event) => <li key={event.id}>{event.title}</li>);

  return (
    <div>
      <button onClick={handleClick}>更新</button>
      <ul>{listItems}</ul>
    </div>
  );
};

export default IndexPage;
