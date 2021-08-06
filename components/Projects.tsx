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

import Circle from "components/Circle";
import GradientTitle from "components/GradientTitle";

const Projects = () => {
  const projects = useMemo(
    () => [
      {
        imgName: "demacia",
        text: {
          doesNeedTitle: true,
          title: "Demacia Website",
          description: "A website I made for my FRC team",
        },
        links: {
          site: "https://demacia5635.github.io/",
          code: "https://github.com/Demacia5635/demacia5635.github.io",
        },
        SVG: Demacia,
        colors: {
          color: "rgb(82,47,156)",
          gradientClass: "from-purple-500 to-[rgb(82,47,156)]",
        },
      },
      {
        imgName: "school",
        text: {
          doesNeedTitle: true,
          title: "School Website",
          description: "A school website I made for my capstone project",
        },
        links: {
          site: "https://noamalffasy.github.io/SchoolWebsite/",
          code: "https://github.com/noamalffasy/SchoolWebsite",
        },
        SVG: SchoolWebsite,
        colors: {
          color: "rgb(62,97,143)",
          gradientClass: "from-blue-500 to-[#3e618f]",
        },
      },
      {
        imgName: "oyah",
        text: {
          doesNeedTitle: false,
          title: "Oyah",
          description:
            "A now dead Super Smash Bros. Melee website, it includes everything from news to tutorials",
        },
        links: {
          site: "https://oyah-200816.appspot.com",
          code: "https://github.com/noamalffasy/Oyah",
        },
        SVG: Oyah,
        colors: {
          color: "#cc0000",
          gradientClass: "from-gray-100 to-gray-200",
        },
      },
      {
        imgName: "hebrew-game",
        text: {
          doesNeedTitle: true,
          title: "Hebrew Game",
          description: "A game I made for a Hebrew work",
        },
        links: {
          site: "https://noamalffasy.github.io/HebrewWork/",
          code: "https://github.com/noamalffasy/HebrewWork",
        },
        SVG: HebrewGame,
        colors: { color: "#a00", gradientClass: "from-red-500 to-[#a00]" },
      },
      {
        imgName: "elmix",
        text: {
          doesNeedTitle: false,
          title: "Elmix",
          description:
            "A YouTube channel website for a friend, it has whatever you expect from this kind of website",
        },
        links: { site: "https://elmix-website.herokuapp.com/" },
        SVG: Elmix,
        colors: {
          color: "#3498db",
          gradientClass: "from-blue-400 to-[#3498db]",
        },
      },
    ],
    []
  );

  return (
    <div className="px-4-safe sm:px-8-safe mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-32 lg:gap-y-16">
      {projects.map((project, i) => {
        return <Project {...project} key={i} />;
      })}
    </div>
  );
};

interface ProjectProps {
  imgName: string;
  text: {
    doesNeedTitle: boolean;
    title: string;
    description: string;
  };
  links: { site: string; code?: string };
  colors: { color: string; gradientClass: string };
  SVG: SVGIcon;
}

const Project = ({
  imgName,
  text: { doesNeedTitle, title, description },
  links,
  SVG,
  colors: { color, gradientClass },
}: ProjectProps) => {
  return (
    <div className="relative text-center h-full w-full rounded-2xl overflow-hidden text-gray-900 space-y-6">
      <div className="relative flex justify-center pt-6 lg:mx-8">
        <SiteScreenshot imgName={imgName} title={title} />
      </div>
      <div className="flex flex-col justify-center items-center px-4-safe md:px-8-safe">
        <div className="md:space-y-1">
          {doesNeedTitle && (
            <Circle className="p-4 h-28 w-28" color={color}>
              <SVG className="h-full mx-auto" />
            </Circle>
          )}
          <div className="flex items-center">
            <div className="inline-flex items-start">
              {doesNeedTitle ? (
                <GradientTitle gradient={gradientClass}>{title}</GradientTitle>
              ) : (
                <SVG className="h-24 md:h-28" />
              )}
              <a
                className="hidden md:block"
                href={links.site}
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
                      "mt-2": !doesNeedTitle,
                    }
                  )}
                  color={color}
                />
              </a>
            </div>
            {links.code && (
              <a
                className="hidden md:inline-block"
                href={links.code}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon className="inline-block h-8 w-8 ml-2" />
              </a>
            )}
          </div>
        </div>
        <div className="md:max-w-xl mx-auto mt-2">
          <MobileTextLinks color={color} links={links} />
          <p className="mt-2 text-lg sm:text-2xl font-light opacity-70">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;

interface SiteScreenshotProps {
  imgName: string;
  title: string;
}

const SiteScreenshot = ({ imgName, title }: SiteScreenshotProps) => {
  return (
    <picture className="rounded-lg overflow-hidden shadow-center">
      <source media="(min-width: 1536px)" srcSet={`/img/${imgName}-1920.png`} />
      <source media="(min-width: 1280px)" srcSet={`/img/${imgName}-1280.png`} />
      <source media="(min-width: 1024px)" srcSet={`/img/${imgName}-1024.png`} />
      <source media="(min-width: 768px)" srcSet={`/img/${imgName}-768.png`} />
      <source media="(min-width: 640px)" srcSet={`/img/${imgName}-640.png`} />
      <img src={`/img/${imgName}-375.png`} alt={`A screenshot from ${title}`} />
    </picture>
  );
};

interface MobileTextLinksProps {
  color: string;
  links: { site: string; code?: string };
}

const MobileTextLinks = ({ color, links }: MobileTextLinksProps) => {
  return (
    <div className="text-center md:hidden space-y-1" style={{ color }}>
      <a
        className="block space-x-2"
        href={links.site}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GlobeAltIcon className="inline-flex self-center h-6 w-6 mb-[0.125rem] text-gray-500" />
        <span>See the site &gt;</span>
      </a>
      {links.code && (
        <a
          className="block space-x-2"
          href={links.code}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon className="inline-flex self-center h-6 w-6 mb-[0.125rem] text-gray-900" />
          <span>See the code &gt;</span>
        </a>
      )}
    </div>
  );
};
