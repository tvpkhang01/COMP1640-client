import axios from "axios";
import { API_URL } from "../constants/constants";

export const getUserAPI = (params) => axios.get(API_URL.USER, { params });

export const getSemesterAPI = (params) =>
  axios.get(API_URL.SEMESTER, { params });
