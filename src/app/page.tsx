import { getSkills } from '@/models/skills.models';

export default async function Home() {
  const skills = await getSkills();
  console.log(skills);

  return (
    <main>
      <h1>HOME</h1>
      <h2>skills</h2>
      {skills
        ? skills.map((skill) => {
            return (
              <ol>
                <li>{skill}</li>
              </ol>
            );
          })
        : 'no skills found'}
      <iframe
        title="Report Section"
        width="600"
        height="373.5"
        src="https://app.powerbi.com/view?r=eyJrIjoiNzMyNzUxYTktYzYzNy00ODgwLWFhMDctMTJkOTYxZDE1MDViIiwidCI6ImU3YjFjYTU3LTU1M2YtNDJmMC1hNDhhLTE1ODQxNWI2MDk1YiJ9"
        allowFullScreen={true}
      ></iframe>
    </main>
  );
}
