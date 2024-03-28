import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEY } from '../constants/queryKey';
import { postAdminAPI } from '../api/apiUrl';

export const usePostAdminAuth = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation((userLogin) => postAdminAPI(userLogin), {
        onSuccess: (data) => {
            console.log(data);
            queryClient.refetchQueries([QUERY_KEY.AUTH]);
        },
    });
    return mutation;
};
