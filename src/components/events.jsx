import React, { Component } from "react";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import EventsList from "./eventsList";
import _ from "lodash";

class Events extends Component {
  state = {
    events: [
      {
        id: 9,
        title: "Workshop Prise de parole en public",
        slug: "workshop-prise-de-parole-en-public",
        description:
          "3 personnes sur 4 redoutent le fait de s’exprimer en public.\r\nC’est ce qu’on appelle la #glossophobie.\r\nEt comme toutes les peurs, celle-ci aussi peut s’apprivoiser.\r\nC’est ce que nous vous proposons à travers ce #workshop.\r\nGrâce à des techniques éprouvées et une longue expérience en la matière, nous vous apportons tous les outils nécessaires à une prise de parole réussie.\r\nRendez-vous donc au sein de l’@Institut des Arts Oratoires pour révéler le talent qui est en vous.\r\n\r\nWorkshop sur 5 semaines : De mardi 14 juin à Mardi 12 juillet de 18h à 20h",
        inventory: 12,
        unit_price: 2500,
        theme: 5,
        city: "Casablanca",
        location: "Académie de théâtre Helen O'Grady",
        date: "2022-06-14T18:00:00Z",
        images: [
          {
            id: 10,
            image:
              "http://127.0.0.1:8000/media/event/images/formation-prise-de-parole-en-public-2.jpeg",
          },
        ],
        last_update: "2022-06-10T02:08:38.473014Z",
      },
      {
        id: 8,
        title: "Bocademy Football school",
        slug: "bocademy-football-school",
        description:
          "- Cours de football assuré par un moniteur professionnel;\r\n\r\n- 5 séances d’aquagym offertes /an;\r\n\r\n- 1 match/mois gratuit pour les parents des adhérents;",
        inventory: 12,
        unit_price: 400,
        theme: 7,
        city: "Rabat",
        location: "Boca cinco",
        date: "2022-07-21T11:20:00Z",
        images: [
          {
            id: 9,
            image:
              "http://127.0.0.1:8000/media/event/images/bocademy-football-school.jpg",
          },
        ],
        last_update: "2022-06-08T19:36:49.609034Z",
      },
      {
        id: 7,
        title: "Yassar - Wald Nass à Tanger",
        slug: "yassar-wald-nass-a-tanger",
        description:
          'Depuis Comedia en 2010, où il fut élu grand gagnant, Yassar ne cesse d’être sollicité, que ce soit sur le petit écran, ou sur les différentes scènes du Royaume.  \r\n\r\nCe jeune humoriste a su imposer sa place et aujourd\'hui, en parallèle du spectacle Humouraji et du duo "2h de rire" avec Rachid Rafik, Yassar lance une tournée avec son tout premier spectacle en solo "Wald Nass".\r\n\r\nAvec son style agressif, incisif, et drôlement méchant, Yassar n\'épargne personne, et surtout pas son public, conquis d\'avance.',
        inventory: 30,
        unit_price: 200,
        theme: 4,
        city: "Tanger",
        location: "Centre culturel Ahmed Boukmakh",
        date: "2022-06-18T19:30:00Z",
        images: [
          {
            id: 8,
            image:
              "http://127.0.0.1:8000/media/event/images/yassar-wald-nass-a-tanger.jpeg",
          },
        ],
        last_update: "2022-06-08T19:34:50.231288Z",
      },
      {
        id: 6,
        title: "Cycle De Formation WEBDESIGNER CONFIRME",
        slug: "cycle-de-formation-webdesigner-confirme",
        description:
          "Le webdesign correspond à l’interface web et comprend l’architecture interactionnelle,  l’organisation des pages, l’arborescence et la navigation d’un site web. Le métier de Webdesigner équivaut au poste de responsable artistique web qui conçoit tout l’aspect graphique du site en respectant les désirs du client, les impératifs de marketing et de communication et le public visé.\r\n\r\nAujourd’hui, de plus en plus d’entreprises font appel à des professionnels du web et notamment dans le domaine du design (Webdesigners).",
        inventory: 20,
        unit_price: 300,
        theme: 5,
        city: "Casablanca",
        location: "Académie Marocain de l’innovation",
        date: "2022-06-30T09:30:00Z",
        images: [
          {
            id: 7,
            image:
              "http://127.0.0.1:8000/media/event/images/KbbVSUSbiNTgTFOy6TayGD9j83sVb2CmjK7aLNFV.jpeg",
          },
        ],
        last_update: "2022-06-08T19:33:34.548638Z",
      },
      {
        id: 5,
        title: "Soirée Masquée",
        slug: "soiree-masquee",
        description:
          "Soirée masquée à l’honneur des célibataires ! Que vous soyez seuls ou accompagnés, vous vous amuserez à coup sûr, ferez de belles rencontres et peut-être même que vous trouverez l’amour !\r\n\r\nAnonymat garanti : Vous ne partagez vos coordonnées qu’avec ceux qui vous plaisent. \r\n\r\nÂges admis : entre 25 et 40 ans.",
        inventory: 12,
        unit_price: 200,
        theme: 3,
        city: "Casablanca",
        location: "Fence",
        date: "2022-06-09T19:00:00Z",
        images: [
          {
            id: 6,
            image:
              "http://127.0.0.1:8000/media/event/images/soiree-masquee.jpeg",
          },
        ],
        last_update: "2022-06-08T19:31:07.839309Z",
      },
      {
        id: 4,
        title: "Hassan El Fad à Oujda",
        slug: "hassan-el-fad-a-oujda",
        description:
          "Le spectacle de Hassan El Fad \"WHO IS KABOUR\" se tiendra le 11 Juin 2022 au Théâtre Mohammed 6 à Oujda\r\n\r\nCe personnage a su conquérir tous les foyers marocains et a enregistré le top audience. Ce nouveau spectacle, intitulé WHO'S KABOUR, mettra en avant le personnage en toute sa splendeur, avec une mise en scène exceptionnelle représentée sous forme d'interviews sur scène avec ce personnage incorrigible.",
        inventory: 11,
        unit_price: 100,
        theme: 4,
        city: "Oujda",
        location: "Théâtre Mohammed 6 à Oujda",
        date: "2022-06-11T19:30:00Z",
        images: [
          {
            id: 5,
            image:
              "http://127.0.0.1:8000/media/event/images/hassan-el-fad-a-oujda-2.jpg",
          },
        ],
        last_update: "2022-06-05T01:17:40.222700Z",
      },
      {
        id: 3,
        title: "Draganov & Stormy",
        slug: "draganov-stormy",
        description:
          '🔴Etes-vous prêt pour une soirée de folie?🔴 "Al Irfane Music & Art Festival" vous présente deux de votre rappeurs préférés STORMY et DRAGANOV en une seule nuit en exclusivité à RABAT. Rendez vous le 5 juin à Millenium Raa, pour un festival splendide 🤯, plein d\'ambiance et de jouissance sensationnel.',
        inventory: 12,
        unit_price: 200,
        theme: 3,
        city: "Rabat",
        location: "📍Millenium, Souissi, Rabat",
        date: "2022-06-05T20:00:00Z",
        images: [
          {
            id: 4,
            image:
              "http://127.0.0.1:8000/media/event/images/concert-draganov-stormy-limaf-festival-4.png",
          },
        ],
        last_update: "2022-06-05T01:07:55.555093Z",
      },
      {
        id: 2,
        title: "Gnaoua Tour 2022 - ESSAOUIRA",
        slug: "gnaoua-tour-2022-essaouira",
        description:
          'description": "GFT22 I PASS 2 JOURS ESSAOUIRA PASS DU 3 & 4 JUIN – DEVANT LA SCÈNE PLACE MOULAY EL HASSAN PROGRAMME Vendredi 3 juin à la Place Moulay Hassan 20h30 - Maâlem Abdeslam Alikane & Tyour Gnaoua 20h45 - Maâlem Abdeslam Alikane en concert fusion avec Vieux Farka Trio & Aziz Ozouss 22h00 - Maâlem Said Boulhimas en concert fusion avec Jamaaladeen Tacuma Trio 22h45 - Maâlem Abdellah Akharraz',
        inventory: 36,
        unit_price: 400,
        theme: 3,
        city: "Essaouira",
        location: "DEVANT LA SCÈNE PLACE MOULAY EL HASSAN",
        date: "2022-06-03T20:30:00Z",
        images: [
          {
            id: 1,
            image:
              "http://127.0.0.1:8000/media/event/images/gnaoua-tour-2022-essaouira_UZL034o.jpg",
          },
        ],
        last_update: "2022-06-04T14:37:15.988375Z",
      },
      {
        id: 1,
        title: "Green Challenge Tghazout Bay",
        slug: "green-challenge-tghazout-bay",
        description:
          "Retrouvez la 9éme édition de la course d'obstacles engagée Green Challenge du 10 au 12 Juin 2022 à Taghazout.",
        inventory: 15,
        unit_price: 300,
        theme: 8,
        city: "Marrakech",
        location: "Taghazout",
        date: "2022-06-10T09:30:00Z",
        images: [
          {
            id: 3,
            image:
              "http://127.0.0.1:8000/media/event/images/green-challenge-tghazout-bay.png",
          },
        ],
        last_update: "2022-06-04T19:28:30.831350Z",
      },
    ],
    themes: [
      {
        id: 1,
        title: "GNAOUA Festival",
        events_count: 0,
      },
      {
        id: 2,
        title: "JAZZABLANCA Festival",
        events_count: 0,
      },
      {
        id: 3,
        title: "Concerts & Festivals",
        events_count: 3,
      },
      {
        id: 4,
        title: "Théâtre & Humour",
        events_count: 2,
      },
      {
        id: 5,
        title: "Formations",
        events_count: 1,
      },
      {
        id: 6,
        title: "Salons et congrès",
        events_count: 0,
      },
      {
        id: 7,
        title: "Famille & Loisirs",
        events_count: 1,
      },
      {
        id: 8,
        title: "Sport",
        events_count: 1,
      },
      {
        id: 9,
        title: "Cinéma",
        events_count: 0,
      },
    ],
    pageSize: 6,
    currentPage: 1,
    sortColumn: {
      column: "title",
      order: "asc",
    },
  };
  //   componentDidMount() {
  //    const themes = [{name: "All Themes"}, ...getThemes()];
  //    this.setState({events: getEvents(), themes});
  //   }
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleThemeSelect = (theme) => {
    this.setState({ selectedTheme: theme, currentPage: 1 });
  };

  //   handleSort = (sortColumn) => {
  //     this.setState({ sortColumn });
  //   };

  render() {
    const { length: count } = this.state.events;
    const {
      currentPage,
      pageSize,
      events: allEvents,
      themes,
      selectedTheme,
      sortColumn,
    } = this.state;

    const filtered =
      selectedTheme && selectedTheme.id
        ? allEvents.filter((e) => e.theme === selectedTheme.id)
        : allEvents;

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
