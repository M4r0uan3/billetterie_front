import axiosInstance from "../axios";

export function getEvents() {
  return axiosInstance.get(`api/events/`);
}

export function saveEvent() {}

export function getEvent(eventId) {
  return axiosInstance.get(`api/events/` + eventId);
}

export function deleteEvent(event_id) {
  axiosInstance.delete(`api/events/`);
}
