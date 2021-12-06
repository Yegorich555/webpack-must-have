import "react-toastify/dist/ReactToastify.css";

export const getApiResourse = async(url, data = {}) => {
  const res = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *client
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      }
      const error = new Error(response.statusText);
      error.response = response;
      throw error;
    })
    .catch((e) => {
      console.log(`Error: ${e.message}`);
      console.log(e.response);
    });

  const result = await res.json();
  return result;
};

export const getApiCardResourse = async(url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.log("Couldn't fetch");
      return false;
    }
    return await res.json();
  } catch (error) {
    console.log("Couldn't fetch", error);
    return false;
  }
};