import axios from "axios";
import { signInRegistraionPostDataTypes } from "../types/types";

export const signInPostData = ({ formData }: signInRegistraionPostDataTypes) =>
  axios.post("/api/auth/signIn/", formData);

export const registrationPostData = ({ formData }: signInRegistraionPostDataTypes) =>
  axios.put("/api/auth/signUp", formData);
