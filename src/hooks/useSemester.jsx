import { useQuery } from "@tanstack/react-query";
import { getUserAPI } from "../api/apiUrl";
import { QUERY_KEY } from "../constants/queryKey";


export const useGetSemesters = (params) =>
useQuery(
    [
        QUERY_KEY.USER,
    ],
    async () => {
        const { data } = await getUserAPI(params);
        return data;
    },
);