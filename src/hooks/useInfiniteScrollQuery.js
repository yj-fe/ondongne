import { useInfiniteQuery } from "react-query";

export const useInfiniteScrollQuery = (fetchQuery, key) => {
	const loadData = async ({ pageParam = 1 }) => {
		const response = await fetchQuery;
		const data = response.data.data.items ?? response.data.data.stores;
		return {
			data,
			page: pageParam,
			isLast: response.data.data.count === data.length,
		};
	};

	const { data, isSuccess, isLoading, hasNextPage, fetchNextPage } =
		useInfiniteQuery([key], loadData, {
			getNextPageParam: (lastPage, pages) => {
				if (lastPage.isLast) {
					return false;
				}
				return lastPage.page + 1;
			},
		});

	return { data, isSuccess, isLoading, hasNextPage, fetchNextPage };
};
