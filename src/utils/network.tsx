import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getApiResourse = async (url: string, data = {}) => {
  toast.error("something wrong");
  toast.success("well");

  try {
    const response = await fetch(url, {
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
    });

    if (response.status === 400) {
      return [false, <ToastContainer draggable={false} />];
    }
    if (!response.ok) {
      return false;
    }
    return await response.json();
  } catch (error) {
    alert("kkkkkkk");
    return false;
  }
};

export const getApiCardResourse = async (url: string) => {
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
