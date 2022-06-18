import http from "./httpService";
import config from "../config.json";
const apiEndpoint = config.apiUrl + "events/";

export function getEvents() {
  return http.get(apiEndpoint);
}

export function saveEvent() {}

export function getEvent(eventId) {
  return http.get(apiEndpoint + eventId);
}

export function deleteEvent(event_id) {
  http.delete(apiEndpoint);
}
