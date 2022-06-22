// import http from "./httpService";
// import config from "../config.json";
// const apiEndpoint = config.apiUrl + "events/";
import axiosInstance from "../axios";

export function getEvents() {
  // return http.get(apiEndpoint);
  return axiosInstance.get(`events/`);
}

export function saveEvent() {}

export function getEvent(eventId) {
  return axiosInstance.get(`events/` + eventId);
}

export function deleteEvent(event_id) {
  axiosInstance.delete(`events/`);
}
