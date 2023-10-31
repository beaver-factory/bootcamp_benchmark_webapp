import AboutUsBio from "./components/aboutUsBio";
import BioItem from "./components/bioItem";

export default function About() {
  const members = [
    {
      name: "Matt",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imgSrc: "mss.jpeg",
      portfolioUrl: "https://mattscarthsaunders.netlify.app/",
      githubUrl: "https://github.com/MattScarthSaunders",
      linkedInUrl: "https://www.linkedin.com/in/matthew-scarth-saunders/",
    },
    {
      name: "Teyah",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imgSrc: "tbd.jpeg",
      portfolioUrl: "",
      linkedInUrl: "https://www.linkedin.com/in/teyahbd/"
    },
    {
      name: "Chris",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imgSrc: "cd.jpeg",
      portfolioUrl: "",
      linkedInUrl: "https://www.linkedin.com/in/chris-duignan-142963175/"
    },
    {
      name: "Alex",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imgSrc: "ac.jpeg",
      portfolioUrl: "",
      linkedInUrl: "https://www.linkedin.com/in/alexcupit/"
    },
  ];

  return (
    <main className="w-screen h-screen flex flex-col justify-start items-center">
      <AboutUsBio></AboutUsBio>
      <ul className="w-full h-max flex flex-col justify-center items-center gap-[1vh] ">
        {members.map(
          ({ name, bio, githubUrl, portfolioUrl, linkedInUrl, imgSrc }, index) => {
            return (
              <BioItem
                key={name + index}
                index={index}
                bio={bio}
                githubUrl={githubUrl}
                portfolioUrl={portfolioUrl}
                linkedInUrl={linkedInUrl}
                imgSrc={imgSrc}
              ></BioItem>
            );
          }
        )}
      </ul>
    </main>
  );
}
