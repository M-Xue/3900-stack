'use client';

import { ItemType } from '@/types/types';
import React, { ChangeEvent, useState } from 'react';
import styles from './page.module.css';
import { v4 as uuidv4 } from 'uuid';

export default function Form({
	addItem,
}: {
	addItem: (newItem: ItemType) => void;
}) {
	const [input, setInput] = useState<string>('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (input === '') return;
		const newItem: ItemType = {
			id: uuidv4(),
			title: input,
		};
		addItem(newItem);
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
