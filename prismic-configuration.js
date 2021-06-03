import Prismic from "prismic-javascript";

export const apiEndpoint = "https://news-site-2.cdn.prismic.io/api/v2";

// here you would export the access token too if you needed it
export const accessToken = "MC5ZTGljeVJNQUFHVUxRSm5J.de-_vVlkWu-_vUdoXlQFau-_ve-_vRtp77-977-9aGU277-977-9PgxQ77-9Ru-_ve-_vS8C";

//creating a prismic client object

export const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken));

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};

  return {
    ...reqOption,
    ...accessTokenOption,
  };
};