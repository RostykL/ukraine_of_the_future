import { useMemo } from "react";

interface GoogleCalendarEvent {
  title: string;
  start: Date;
  end: Date;
  location: string;
  description: string;
}

const useAddToGoogleCalendar = (event: GoogleCalendarEvent) => {
  const { title, start, end, location, description } = event;

  const formatDateTime = (dateTime: Date) => {
    return dateTime.toISOString().replace(/[:-]|\.\d{3}/g, "");
  };

  return useMemo(() => {
    const baseUrl = "https://www.google.com/calendar/render?action=TEMPLATE";
    const url = new URL(baseUrl);
    url.searchParams.set("text", title);
    url.searchParams.set(
      "dates",
      `${formatDateTime(start)}/${formatDateTime(end)}`
    );
    url.searchParams.set("location", location);
    url.searchParams.set("details", description);

    return url.toString();
  }, [title, start, end, location, description]);
};

export default useAddToGoogleCalendar;
