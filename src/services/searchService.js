import * as request from '~/utils/httpRequest';

export const search = async (q, type = 'less') => {
  try {
    // eslint-disable-next-line
    const res = await httpRequest.get(`users/search`, {
      params: {
        q,
        type,
      }
    })
    return res.data;
  } catch (error) {
    console.log(error)
  }
}

