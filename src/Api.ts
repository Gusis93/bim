export const  fetchData = async (API: string) => {
  const reponse = await fetch(API);
  return await reponse.json();
}