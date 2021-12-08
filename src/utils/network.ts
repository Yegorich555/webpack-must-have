import "react-toastify/dist/ReactToastify.css";

interface ApiUserInterface {
  password: string;
  email: string;
  userName?: string;
}

interface Result {
  user: { password: string; email: string; userName: string };
}

export const getApiResourse = async (url: string, data: ApiUserInterface): Promise<Result> => {
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
    .then((response: Response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      const error = new Error(response.statusText);
      throw error;
    })
    .catch((e) => {
      console.log(`Error: ${e.message}`);
      console.log(e.response);
    });

  return res;
};

export const getApiCardResourse = async <T>(url: string): Promise<T> => {
  const res = await fetch(url)
    .then((response: Response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      const error = new Error(response.statusText);
      throw error;
    })
    .catch((e) => {
      console.log(`Error: ${e.message}`);
      console.log(e.response);
    });

  return res;
};
