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
      <section className="w-[90vw] flex justify-center items-center bg-white">
        <p className="border-solid border-black border-2 p-10 mb-10">
          We are an eager team of fantastic overachievers who absolutely destroy
          any problem ever, we're the best.
        </p>
      </section>
      <ul className="w-full h-max flex flex-col justify-center items-center gap-[1vh] ">
        {members.map(
          ({ name, bio, githubUrl, portfolioUrl, linkedInUrl }, index) => {
            return (
              <li
                className={
                  (index % 2 === 0 ? "flex " : "flex flex-row-reverse ") +
                  "w-max h-max justify-center items-center  p-2 gap-2"
                }
                key={name + index}
              >
                <img
                  className={
                    (index % 2 === 0 ? "mr-5 " : "ml-5 ") +
                    "border-solid border-black border-2  rounded-full min-w-[100px] max-w-[125px] "
                  }
                  alt="profile image"
                  src="beaver.jpg"
                ></img>
                <section className="w-[40vw] gap-4 h-max border-solid border-black border-2 flex flex-col justify-center items-center p-2 bg-white">
                  <p className="h-max ">{bio}</p>
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
                </section>
              </li>
            );
          }
        )}
      </ul>
    </main>
  );
}
