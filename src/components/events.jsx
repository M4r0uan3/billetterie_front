import React, { Component } from "react";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getThemes } from "../services/themeService";
import EventsList from "./eventsList";
import _ from "lodash";
import { getEvents, deleteEvent } from "../services/eventService";
import { toast } from "react-toastify";
import SearchBox from "./searchBox";
class Events extends Component {
  state = {
    themes: [],
    events: [],
    pageSize: 6,
    currentPage: 1,
    sortColumn: {
      column: "title",
      order: "asc",
    },
    selectedTheme: null,
    searchQuery: "",
  };
  async componentDidMount() {
    const { data: theme_resp } = await getThemes();
    // console.log(themes_resp.data.results);
    const themes = [{ id: "", title: "All Themes" }, ...theme_resp.results];
    const { data: events_resp } = await getEvents();
    // console.log(events_resp);
    this.setState({ events: events_resp.results, themes });
  }
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleThemeSelect = (theme) => {
    this.setState({ selectedTheme: theme, searchQuery: "", currentPage: 1 });
  };

  handleDelete = async (event) => {
    const originalEvents = this.state.events;
    const events = originalEvents.filter((e) => e.id !== event.id);
    this.setState({ events });

    try {
      await deleteEvent(event.id);
    } catch (ex) {
      if (ex.response && ex.reponse.status === 404) {
        toast.error("This event has already been deleted.");
      }
      this.setState({ events: originalEvents });
    }
  };
  //   handleSort = (sortColumn) => {
  //     this.setState({ sortColumn });
  //   };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedTheme: null, currentPage: 1 });
  };

  render() {
    const { length: count } = this.state.events;
    const {
      currentPage,
      pageSize,
      events: allEvents,
      themes,
      selectedTheme,
      sortColumn,
      searchQuery,
    } = this.state;
    let filtered = allEvents;
    if (searchQuery) {
      filtered = allEvents.filter(
        (e) =>
          e.title.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
          e.city.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
          e.description.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else if (selectedTheme && selectedTheme.id) {
      filtered = allEvents.filter((e) => e.theme === selectedTheme.id);
    }

    const bar =
      filtered.length !== 0
        ? `Showing ${filtered.length} events in the database.`
        : "There are no events in the database.";

    // const sorted = _.orderBy(filtered, [sortColumn.column], [sortColumn.order]);
    const events = paginate(filtered, pageSize, currentPage);
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-2">
            <ListGroup
              items={themes}
              onItemSelect={this.handleThemeSelect}
              selectedItem={selectedTheme}
            />
          </div>
          <div className="col">
            <div className="mb-5">{bar}</div>
            <SearchBox value={searchQuery} onChange={this.handleSearch} />
            {count !== 0 && (
              <EventsList
                events={events}
                onSort={this.handleSort}
                sortColumn={sortColumn}
              />
            )}
            <Pagination
              pageSize={pageSize}
              eventsCount={filtered.length}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
