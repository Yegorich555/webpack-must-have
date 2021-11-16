export const getApiResourse = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.log("Couldn't fetch");
      return false;
    }
    return await res.json();
  } catch (error) {
    console.log("Couldn't fetch", error.message);
    return false;
  }
};

export const getApiResourse2 = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.log("Couldn't fetch");
      return false;
    }
    return await res.json();
  } catch (error) {
    console.log("Couldn't fetch", error.message);
    return false;
  }
};
