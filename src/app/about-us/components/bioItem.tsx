import BioLinks from "./bioLinks";

type props = {
  index: number;
  bio: string | undefined;
  githubUrl: string | undefined;
  portfolioUrl: string | undefined;
  linkedInUrl: string | undefined;
  imgSrc: string | undefined
};

export default function bioItem({
  index,
  bio,
  githubUrl,
  portfolioUrl,
  linkedInUrl,
  imgSrc
}: props) {
  return (
    <li
      className={
        (index % 2 === 0 ? "flex " : "flex flex-row-reverse ") +
        "w-max h-max justify-center items-center  p-2 gap-2"
      }
    >
      <img
        className={
          (index % 2 === 0 ? "mr-5 " : "ml-5 ") +
          "border-solid border-black border-2  rounded-full min-w-[100px] max-w-[125px] "
        }
        alt="profile image"
        src={imgSrc}
      ></img>
      <section className="w-[40vw] gap-4 h-max border-solid border-black border-2 flex flex-col justify-center items-center p-2 bg-white">
        <p className="h-max text-black p-5">{bio}</p>
        <BioLinks
          githubUrl={githubUrl ?? ""}
          portfolioUrl={portfolioUrl ?? ""}
          linkedInUrl={linkedInUrl ?? ""}
        ></BioLinks>
      </section>
    </li>
  );
}
