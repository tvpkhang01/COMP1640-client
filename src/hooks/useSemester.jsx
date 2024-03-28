import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
	postSemesterAPI,
	getSemesterAPI,
	getSemesterDetailAPI,
	patchSemesterAPI,
	deleteSemsesterAPI,
} from '../api/apiUrl';
import { QUERY_KEY } from '../constants/queryKey';

export const usePostSemester = () => {
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: (createSemester) => postSemesterAPI(createSemester),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEY.SEMESTER] });
			console.log('Success');
		},
		onError: ({ response }) => {
			console.log('Error: ' + response);
		},
	});

	return mutation;
};

export const useGetSemesters = (params) =>
	useQuery({
		queryKey: [QUERY_KEY.SEMESTER],
		queryFn: async () => {
			const { data } = await getSemesterAPI(params);
			return data;
		},
	});

export const useGetSemesterDetail = (id) =>
	useQuery({
		queryKey: [QUERY_KEY.SEMESTER, id],
		queryFn: async () => {
			const { data } = await getSemesterDetailAPI(id);
			return data;
		},
	});

export const usePatchSemester = (id) => {
	const queryClient = useQueryClient();
	const editSemesterData = async ({semesterName, startDate, endDate}) => {
		await patchSemesterAPI(id, { semesterName, startDate, endDate});
	}
	const mutation = useMutation({
		mutationFn: editSemesterData,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEY.SEMESTER] });
			console.log('Update Success');
		},
		onError: ({ response }) => {
			console.log('Error: ' + response);
		},
	});

	return mutation;
};

export const useDeleteSemester = (id) => {
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: () => deleteSemsesterAPI(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEY.SEMESTER] });
			console.log('Delete Success');
		},
		onError: ({ response }) => {
			console.log('Error: ' + response);
		},
	});

	return mutation;
};
