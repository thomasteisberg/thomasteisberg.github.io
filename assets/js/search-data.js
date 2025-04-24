// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-a-machine-learning-approach-to-mass-conserving-ice-thickness-interpolation",
          title: 'A Machine Learning Approach to Mass-Conserving Ice Thickness Interpolation',
          description: "IGARSS 2021 paper",
          section: "Projects",handler: () => {
              window.location.href = "/projects/igarss2021/";
            },},{id: "projects-jarvas",
          title: 'JARVAS',
          description: "UWB-based indoor positioning system",
          section: "Projects",handler: () => {
              window.location.href = "/projects/jarvas/";
            },},{id: "projects-peregrine-uav-borne-ice-penetrating-radar-system",
          title: 'Peregrine UAV-borne Ice-Penetrating Radar System',
          description: "A field-portable fixed-wing UAV equipped with a miniaturized ice-penetrating radar",
          section: "Projects",handler: () => {
              window.location.href = "/projects/peregrine/";
            },},{id: "projects-plotting-common-antarctic-datasets",
          title: 'Plotting common Antarctic datasets',
          description: "Open-source code snippets for common plots in glaciology",
          section: "Projects",handler: () => {
              window.location.href = "/projects/plotting_antarctica/";
            },},{id: "projects-radarfilm-studio",
          title: 'radarfilm.studio',
          description: "Visualization tool for archival data from the first large-scale ice-penetrating radar survey of Antarctica",
          section: "Projects",handler: () => {
              window.location.href = "/projects/radarfilmstudio/";
            },},{id: "projects-whiff",
          title: 'Whiff',
          description: "A 1-meter autonomous sailboat",
          section: "Projects",handler: () => {
              window.location.href = "/projects/whiff/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
