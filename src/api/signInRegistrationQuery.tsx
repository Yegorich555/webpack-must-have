import axios from "axios";
import { localStorageService } from "@/localStorageService/localStorageService";
import { signInPostDataTypes, registrationPostDataTypes } from "../types/types";

export const signInPostData = ({ formData, userLoggedIn, setUserName }: signInPostDataTypes) => {
  axios
    .post("/api/auth/signIn/", formData)
    .then((res) => {
      localStorageService.setElem("token", res.data);
      const info: object = JSON.parse(localStorageService.getElem("token"));
      // @ts-ignore
      setUserName(info.name);
      userLoggedIn();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const registrationPostData = ({ formData, setUserName, redirect }: registrationPostDataTypes) => {
  axios
    .put("/api/auth/signUp", formData)
    .then((res) => {
      console.log(res.data);
      if (res.data) {
        localStorageService.setElem("token", res.data);
        const info: object = JSON.parse(localStorageService.getElem("token"));
        // @ts-ignore
        setUserName(info.name);
        redirect();
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
