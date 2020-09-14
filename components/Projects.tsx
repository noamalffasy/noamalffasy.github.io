import * as React from "react";
import { Component } from "react";

import { Oyah, Elmix, SchoolWebsite, HebrewGame } from "components/svgs";

interface ProjectInterface {
  name: string;
  description: string;
  link: string;
  codeLink?: string;
  svg: JSX.Element;
}

interface State {
  projects: Array<ProjectInterface>;
}

class Projects extends Component<{}, State> {
  state = {
    projects: [
      {
        name: "School Website",
        description: "A school website I made for my capstone project",
        link: "https://noamalffasy.github.io/SchoolWebsite/",
        codeLink: "https://github.com/noamalffasy/SchoolWebsite",
        svg: <SchoolWebsite />
      },
      {
        name: "Oyah",
        description:
          "A now dead Super Smash Bros. Melee website, it includes everything from news to tutorials",
        link: "https://oyah-200816.appspot.com",
        codeLink: "https://github.com/noamalffasy/Oyah",
        svg: <Oyah />
      },
      {
        name: "Hebrew Game",
        description: "A game I made for a Hebrew work",
        link: "https://noamalffasy.github.io/HebrewWork/",
        codeLink: "https://github.com/noamalffasy/HebrewWork",
        svg: <HebrewGame />
      },
      {
        name: "Elmix",
        description:
          "A YouTube channel website for a friend, it has whatever you expect from this kind of website",
        link: "https://elmix-website.herokuapp.com/",
        svg: <Elmix />
      }
    ]
  };

  render() {
    return (
      <div className="Projects" id="projects">
        <h1>Projects</h1>
        <div className="projects">
          {this.state.projects.map((project, i) => {
            return <Project project={project} key={i} />;
          })}
        </div>
        <style jsx>{`
          .Projects {
            display: flex;
            padding: 5rem 0 0;
            flex-flow: column;
            align-items: center;
            justify-content: center;
          }

          .Projects h1 {
            font-size: 4.5rem;
          }

          .Projects p {
            font-size: 2rem;
            font-weight: 300;
            text-align: center;
            max-width: 40rem;
            margin: 0 auto;
            white-space: pre-wrap;
          }

          .Projects .projects {
            display: flex;
            margin: 1rem 0 0 0;
            align-items: center;
            justify-content: center;
            flex-flow: wrap;
          }
        `}</style>
      </div>
    );
  }
}

interface Props {
  project: ProjectInterface;
}

class Project extends Component<Props> {
  render() {
    const { name, description, link, codeLink, svg } = this.props.project;
    return (
      <div className="Project">
        {svg}
        <h2>{name}</h2>
        <p>{description}</p>
        <a href={link}>See it here</a>
        <br />
        {codeLink ? <a href={codeLink}>See the code here</a> : null}
        <style jsx>{`
          .Project {
            text-align: center;
            /* background: rgba(0, 0, 0, 0.025); */
            background: #f9f9f9;
            margin: 0 1rem 3rem;
            padding: 1.5rem 0.5rem;
            /* width: calc((100% * 1 / 2) - (1rem * 2)); */
            /* box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.15); */
            transition: all 0.3s;
          }

          .Project:hover {
            box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.15);
          }

          .Project h2 {
            font-size: 3rem;
          }

          .Project p {
            font-size: 1.5rem;
            font-weight: 300;
          }

          .Project a {
            display: inline-block;
            font-size: 1.15rem;
            font-weight: 300;
            margin: 0.5rem auto 0;
          }

          .Project a::after {
            content: " ›";
          }

          @media (min-width: 768px),
            @media (min-width: 768px) and (-webkit-min-device-pixel-ratio: 1) {
            .Project {
              width: calc((100% * 1 / 2) - (1rem * 2));
            }
          }
        `}</style>
        <style jsx global>{`
          .Project svg {
            max-width: 80%;
            box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.1);
            border-radius: 0.3rem;
            margin: 0 0 1rem 0;
            pointer-events: none;
            cursor: default;
          }
        `}</style>
      </div>
    );
  }
}

export default Projects;
