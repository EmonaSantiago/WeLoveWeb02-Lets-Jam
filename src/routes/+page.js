export const load = async ({ fetch }) => {
  const sessionRes = await fetch("https://weloveweb.api.fdnd.nl/v1/session");
  const sessionData = await sessionRes.json();
  const sessions = sessionData.data;

  return {
    sessions,
  };
};
