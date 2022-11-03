export const getAllResy = async () => {
  return fetch('http://localhost:3001/api/v1/reservations');
};

export const submitResy = async (formData) => {
  try {
    const url = 'http://localhost:3001/api/v1/reservations';
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(formData),
    };
    return fetch(url, options);
  } catch (err) {
    errorMessage(err);
  }
};

const errorMessage = (err) => {
  return (
    err.status +
    'There was a problem making your reservation. Please try again later'
  );
};

export const removeResy = async (resId) => {
  const url = `http://localhost:3001/api/v1/reservations/${resId}`;
  const options = {
    method: 'DELETE',
    // headers: {
    //   'Content-type': 'application/json',
    // },
    // body: null,
  };

  return fetch(url, options);

  // const response = fetch(url, options);
  // console.log(await (await response).json(), 'promise');
};
