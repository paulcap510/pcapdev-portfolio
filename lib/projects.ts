export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "Schengen Visa Calculator",
    description:
      "A calculator that tracks Schengen Area visa-free stay limits under the 90/180-day rule, correctly rolling the 180-day window as trips are added. Also includes a scraped API, pulling travel data from the U.S. Department of State into a queryable JSON endpoint anyone can hit with a simple curl command.",
    image: "/image2-svc.png",
    tags: ["React", "Node", "Selenium", "BeautifulSoup", "Render"],
    demoUrl: "https://schengen-visa-frontend.onrender.com/",
    githubUrl: "https://github.com/paulcap510/schengen-visa-v7/",
    featured: true,
  },
  {
    title: "Searchable Academic Database",
    description:
      "A searchable database of 3,000+ academic journal articles from Asian Ethnology's full publication history. I scraped and structured the archive with BeautifulSoup, stored it as JSON, and built a React search interface that lets users filter by scholar, geographic region, or keyword and jump straight to the original article.",
    image: "/image3-aedb.png",
    tags: ["React", "Tailwind", "BeautifulSoup", "Render"],
    demoUrl: "https://ae-database.onrender.com/",
    githubUrl: "",
    featured: false,
  },
{
  title: "Sky Check — Personalized Outdoor Conditions Dashboard",
  description:
    "A weather dashboard designed for people managing respiratory or heat-sensitive health conditions who need more than a generic forecast to decide whether it's safe to go outside. Aggregates live data from three separate government sources (the National Weather Service, EPA's AirNow, and Open-Meteo) and rates each metric against configurable personal thresholds, deliberately avoiding a single combined score so no one factor can mask another. Includes a server-side caching layer to minimize redundant API calls and graceful fallback handling if any data source is temporarily unavailable.",
  image: "/image4-skycheck.png",
  tags: ["Python", "FastAPI", "Jinja2", "REST APIs", "Render"],
  demoUrl: "https://aqi-weather-dashboard.onrender.com/",
  githubUrl: "https://github.com/paulcap510/aqi_weather_dashboard",
  featured: true,
},
];