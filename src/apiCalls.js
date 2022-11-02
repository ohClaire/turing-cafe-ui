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
    errorMessage();
  }
};

const errorMessage = () => {
  return 'There was a problem making your reservation. Please try again later';
};
