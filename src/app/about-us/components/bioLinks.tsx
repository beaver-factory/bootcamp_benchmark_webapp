type props = {
  githubUrl: string;
  portfolioUrl: string;
  linkedInUrl: string;
};

export default function bioLinks({
  githubUrl,
  portfolioUrl,
  linkedInUrl,
}: props) {
  return (
    <div className="flex gap-2 justify-center items-center w-full">
      <a
        href={githubUrl}
        className="w-8 h-8"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src="githubLogo.png"></img>
      </a>
      <a
        href={portfolioUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="w-max border-solid border-black border-2 text-white bg-sky-700 pt-1 pb-1 pr-[5vw] pl-[5vw]"
      >
        Portfolio
      </a>
      <a
        href={linkedInUrl}
        className="w-10 h-10"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src="linkedInLogo.png"></img>
      </a>
    </div>
  );
}
