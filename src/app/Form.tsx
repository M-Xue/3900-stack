'use client';

import React, { ChangeEvent, useState } from 'react';
import styles from './page.module.css';
import { trpc } from '@/utils/trpc';
import { useQueryClient } from '@tanstack/react-query';

export default function Form() {
	const [input, setInput] = useState<string>('');
	const queryClient = useQueryClient();

	const createItemMutation = trpc.items.createItem.useMutation({
		onSuccess: () =>
			queryClient.invalidateQueries({
				queryKey: [['items', 'getItems'], { type: 'query' }],
				exact: true,
			}),
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (input === '') return;
		createItemMutation.mutate({ title: input });
		setInput('');
	};

	return (
		<form action='' onSubmit={handleSubmit} autoComplete='off'>
			<label htmlFor='input'>
				<h1>Title</h1>
			</label>
			<div className={styles['input-container']}>
				<input
					id='input'
					type='text'
					placeholder='Title...'
					className={styles['input']}
					onChange={(e: ChangeEvent) => {
						setInput((e.target as HTMLInputElement).value);
					}}
					value={input}
				/>
				<button type='submit' className={styles['submit-button']}>
					Save
				</button>
			</div>
		</form>
	);
}
