'use client';

import { useState } from 'react';
import styles from './page.module.css';
import Card from './Card';
import { ItemType } from '../types/types';
import Form from './Form';
import ListUsers from './ListUsers';

export default function Home() {
	const [items, setItems] = useState<ItemType[]>([]);

	return (
		<div className={styles['main']}>
			<div className={styles['root-container']}>
				<Form
					addItem={(newItem: ItemType) => {
						setItems((prev) => [...prev, newItem]);
					}}
				/>
				<div>
					{items.map((item) => (
						<div key={item.id}>
							<Card
								item={{
									id: item.id,
									title: item.title,
								}}
							/>
						</div>
					))}
				</div>
				<ListUsers />
			</div>
		</div>
	);
}
