import AboutUsBio from "./components/aboutUsBio";
import BioItem from "./components/bioItem";

export default function About() {
  const members = [
    {
      name: "Matt",
      bio: "Matt is a beavery beaver beaving believing bereaving bequeathing",
      imgSrc: "",
      portfolioUrl: "https://mattscarthsaunders.netlify.app/",
      githubUrl: "https://github.com/MattScarthSaunders",
      linkedInUrl: "https://www.linkedin.com/in/matthew-scarth-saunders/",
    },
    {
      name: "Teyah",
      bio: "Teyah likes to beavery beaver beaving believing bereaving bequeathing",
      imgSrc: "",
      portfolioUrl: "",
    },
    {
      name: "Chris",
      bio: "Chris does beavery beaver beaving believing bereaving bequeathing",
      imgSrc: "",
      portfolioUrl: "",
    },
    {
      name: "Alex",
      bio: "Alex explores beavery beaver beaving believing bereaving bequeathing",
      imgSrc: "",
      portfolioUrl: "",
    },
  ];

  return (
    <main className="w-screen h-screen flex flex-col justify-start items-center">
      <AboutUsBio></AboutUsBio>
      <ul className="w-full h-max flex flex-col justify-center items-center gap-[1vh] ">
        {members.map(
          ({ name, bio, githubUrl, portfolioUrl, linkedInUrl }, index) => {
            return (
              <BioItem
                key={name + index}
                index={index}
                bio={bio}
                githubUrl={githubUrl}
                portfolioUrl={portfolioUrl}
                linkedInUrl={linkedInUrl}
              ></BioItem>
            );
          }
        )}
      </ul>
    </main>
  );
}
