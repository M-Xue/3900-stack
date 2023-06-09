'use client';

import { trpc } from '@/utils/trpc';
import React from 'react';

export default function ListUsers() {
	// let { data: hello, isLoading, isFetching } = trpc.users.getHello.useQuery();
	let { data, isLoading, isFetching } = trpc.users.getUser.useQuery({
		userId: 't',
	});

	if (isLoading || isFetching) {
		return <p>Loading...</p>;
	}
	// if (isFetchingUser || isLoadingUser) {
	// 	return <p>Loading...</p>;
	// }

	return (
		<div>
			{/* <div>{hello?.hello}</div> */}
			<div>{data?.id}</div>
			<div>{data?.name}</div>
		</div>
	);
}
