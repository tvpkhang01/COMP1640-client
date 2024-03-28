import axios from 'axios';
import { API_URL } from '../constants/constant';

export const postAdminAPI = (params) => axios.post(API_URL.AUTH, params);

export const getUserAPI = (params) => axios.get(API_URL.USER, params);

export const postSemesterAPI = (params) => axios.post(API_URL.SEMESTER, params);

export const getSemesterAPI = (params) => axios.get(API_URL.SEMESTER, params);

export const getSemesterDetailAPI = (semesterId) =>
	axios.get(`${API_URL.SEMESTER}/${semesterId}`);

export const patchSemesterAPI = (semesterId, params) =>
	axios.patch(`${API_URL.SEMESTER}/${semesterId}`, params);

export const deleteSemesterAPI = (semesterId) =>
	axios.delete(`${API_URL.SEMESTER}/${semesterId}`);
