'use client';

import React from 'react';
import styles from './page.module.css';
import { X } from 'lucide-react';
import { Item } from '@prisma/client';
import { trpc } from '@/utils/trpc';
import { useQueryClient } from '@tanstack/react-query';

export default function Card({ item }: { item: Item }) {
	const queryClient = useQueryClient();

	const deleteItemMutation = trpc.items.deleteItem.useMutation({
		onSuccess: () =>
			queryClient.invalidateQueries({
				queryKey: [['items', 'getItems'], { type: 'query' }],
				exact: true,
			}),
	});

	return (
		<div className={styles['card']}>
			<p>{item.title}</p>
			<button
				type='button'
				className={styles['x-card']}
				onClick={() => deleteItemMutation.mutate({ id: item.id })}
			>
				<X size={16} />
			</button>
		</div>
	);
}
