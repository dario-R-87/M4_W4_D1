export const getProduct = async (url) => {
  try {
      const response = await fetch(url, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmNzEzOGJkNWQxMjAwMTg5MGQzNGEiLCJpYXQiOjE3MDU5OTY2MDEsImV4cCI6MTcwNzIwNjIwMX0.rqjzekJT_GldBSBaPaU7hvuNZqNKslByYrGtOgoG19g",
    },
  });
  const json = await response.json();
  return json;
  } catch (error) {
    alert(error);
  }

};

export const addNewProduct = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmNzEzOGJkNWQxMjAwMTg5MGQzNGEiLCJpYXQiOjE3MDU5OTY2MDEsImV4cCI6MTcwNzIwNjIwMX0.rqjzekJT_GldBSBaPaU7hvuNZqNKslByYrGtOgoG19g",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(await response.text());
    }
    const json = await response.json();
    return json;
  } catch (e) {
    alert(e);
  }
};

export const deleteProduct = async (url, id) => {
  try {
    const response = await fetch(url + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmNzEzOGJkNWQxMjAwMTg5MGQzNGEiLCJpYXQiOjE3MDU5OTY2MDEsImV4cCI6MTcwNzIwNjIwMX0.rqjzekJT_GldBSBaPaU7hvuNZqNKslByYrGtOgoG19g",
      },
    });
    if (!response.ok) {
      throw new Error(await response.text());
    }
    const json = await response.json();
  } catch (error) {
    alert(error);
  }
};

export const updateProduct = async (url, id, data) => {
  try {
    const response = await fetch(url + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmNzEzOGJkNWQxMjAwMTg5MGQzNGEiLCJpYXQiOjE3MDU5OTY2MDEsImV4cCI6MTcwNzIwNjIwMX0.rqjzekJT_GldBSBaPaU7hvuNZqNKslByYrGtOgoG19g",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(await response.text());
    }
    const json = await response.json();
  } catch (e) {
    alert(e);
  }
};

export const getProductById = async (url, id) => {
  try {
      const response = await fetch(url + id, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmNzEzOGJkNWQxMjAwMTg5MGQzNGEiLCJpYXQiOjE3MDU5OTY2MDEsImV4cCI6MTcwNzIwNjIwMX0.rqjzekJT_GldBSBaPaU7hvuNZqNKslByYrGtOgoG19g",
    },
  });
  const json = await response.json();

  return json;
  } catch (error) {
    alert(error);
  }

};
