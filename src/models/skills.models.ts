import client from '@/db/client';

export const getSkills = async () => {
  try {
    await client.connect();
    const result = client.query('SELECT * FROM skills');
    const formattedSkills = [];

    for await (const row of result) {
      console.log(row);
      formattedSkills.push(row.data[1] as string);
    }
    return formattedSkills;
  } catch (e) {
    console.log(e);
  } finally {
    await client.end();
  }
};
