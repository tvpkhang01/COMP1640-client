import { useQuery } from '@tanstack/react-query';
import { getSemesterAPI } from '../api/apiUrl';
import { QUERY_KEY } from '../constants/queryKey';

export const useGetSemesters = (params) =>
	useQuery({
		queryKey: [QUERY_KEY.USER],
		queryFn: async () => {
		const { data } = await getSemesterAPI(params);
		return data;
	}});
