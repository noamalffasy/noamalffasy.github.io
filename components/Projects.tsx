/* eslint-disable @next/next/no-img-element */
import { useMemo } from "react";

import classNames from "classnames";
import { ExternalLinkIcon, GlobeAltIcon } from "@heroicons/react/outline";

import {
  Oyah,
  Elmix,
  SchoolWebsite,
  HebrewGame,
  Demacia,
} from "components/svgs";

import SVGIcon from "components/svgs/SVGIcon";
import GitHubIcon from "components/icons/GitHubIcon";

interface ProjectInterface {
  imgName: string;
  name: string;
  description: string;
  link: string;
  isDarkText?: boolean;
  doesNeedText: boolean;
  codeLink?: string;
  color: string;
  gradient: string;
  SVG: SVGIcon;
}

const Projects = () => {
  const projects = useMemo(
    () => [
      {
        imgName: "demacia",
        name: "Demacia Website",
        doesNeedText: true,
        description: "A website I made for my FRC team",
        link: "https://demacia5635.github.io/",
        codeLink: "https://github.com/Demacia5635/demacia5635.github.io",
        SVG: Demacia,
        color: "rgb(82,47,156)",
        gradient: "from-purple-500 to-[rgb(82,47,156)]",
      },
      {
        imgName: "school",
        name: "School Website",
        doesNeedText: true,
        description: "A school website I made for my capstone project",
        link: "https://noamalffasy.github.io/SchoolWebsite/",
        codeLink: "https://github.com/noamalffasy/SchoolWebsite",
        SVG: SchoolWebsite,
        color: "rgb(62,97,143)",
        gradient: "from-blue-500 to-[#3e618f]",
      },
      {
        imgName: "oyah",
        name: "Oyah",
        doesNeedText: false,
        isDarkText: true,
        description:
          "A now dead Super Smash Bros. Melee website, it includes everything from news to tutorials",
        link: "https://oyah-200816.appspot.com",
        codeLink: "https://github.com/noamalffasy/Oyah",
        SVG: Oyah,
        color: "#cc0000",
        gradient: "from-gray-100 to-gray-200",
      },
      {
        imgName: "hebrew-game",
        name: "Hebrew Game",
        doesNeedText: true,
        description: "A game I made for a Hebrew work",
        link: "https://noamalffasy.github.io/HebrewWork/",
        codeLink: "https://github.com/noamalffasy/HebrewWork",
        SVG: HebrewGame,
        color: "#a00",
        gradient: "from-red-500 to-[#a00]",
      },
      {
        imgName: "elmix",
        name: "Elmix",
        doesNeedText: false,
        description:
          "A YouTube channel website for a friend, it has whatever you expect from this kind of website",
        link: "https://elmix-website.herokuapp.com/",
        SVG: Elmix,
        color: "#3498db",
        gradient: "from-blue-400 to-[#3498db]",
      },
    ],
    []
  );

  return (
    <div className="px-4-safe sm:px-8-safe mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-32 lg:gap-y-16">
      {projects.map((project, i) => {
        return <Project project={project} key={i} />;
      })}
    </div>
  );
};

interface ProjectProps {
  project: ProjectInterface;
}

const Project = ({
  project: {
    name,
    description,
    link,
    codeLink,
    SVG,
    imgName,
    doesNeedText,
    color,
    gradient,
  },
}: ProjectProps) => {
  return (
    <div className="text-center py-8">
      <div
        className={`relative h-full w-full rounded-2xl overflow-hidden text-gray-900`}
      >
        <div className="relative flex justify-center pt-6 lg:mx-8">
          <picture className="rounded-lg overflow-hidden shadow-center">
            <source
              media="(min-width: 1536px)"
              srcSet={`/img/${imgName}-1920.png`}
            />
            <source
              media="(min-width: 1280px)"
              srcSet={`/img/${imgName}-1280.png`}
            />
            <source
              media="(min-width: 1024px)"
              srcSet={`/img/${imgName}-1024.png`}
            />
            <source
              media="(min-width: 768px)"
              srcSet={`/img/${imgName}-768.png`}
            />
            <source
              media="(min-width: 640px)"
              srcSet={`/img/${imgName}-640.png`}
            />
            <img
              src={`/img/${imgName}-375.png`}
              alt={`A screenshot from ${name}`}
            />
          </picture>
        </div>
        <div className="flex flex-col justify-center items-center px-4-safe md:px-8-safe pt-8">
          <div className="md:space-y-1">
            {doesNeedText && (
              <div
                className="inline-block rounded-full p-4 h-28 w-28"
                style={{ backgroundColor: color }}
              >
                <SVG className="h-full mx-auto" />
              </div>
            )}
            <div className="flex items-center">
              <div className="inline-flex items-start">
                {doesNeedText ? (
                  <h2
                    className={`font-black text-3xl sm:text-5xl bg-clip-text text-transparent bg-gradient-to-l ${gradient}`}
                  >
                    {name}
                  </h2>
                ) : (
                  <SVG className="h-24 md:h-28" />
                )}
                <a
                  className="hidden md:block"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLinkIcon
                    className={classNames(
                      "inline-block",
                      "h-4 sm:h-6",
                      "w-4 sm:w-6",
                      "ml-1",
                      {
                        "mt-2": !doesNeedText,
                      }
                    )}
                    color={color}
                  />
                </a>
              </div>
              {codeLink && (
                <a
                  className="hidden md:inline-block"
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon className="inline-block h-8 w-8 ml-2" />
                </a>
              )}
            </div>
          </div>
          <div className="md:max-w-xl mx-auto mt-2">
            <div className="text-center md:hidden space-y-1" style={{ color }}>
              <a
                className="block space-x-2"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GlobeAltIcon className="inline-flex self-center h-6 w-6 mb-[0.125rem] text-gray-500" />
                <span>See the site &gt;</span>
              </a>
              <a
                className="block space-x-2"
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon className="inline-flex self-center h-6 w-6 mb-[0.125rem] text-gray-900" />
                <span>See the code &gt;</span>
              </a>
            </div>
            <p className="mt-2 text-lg sm:text-2xl font-light opacity-70">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
