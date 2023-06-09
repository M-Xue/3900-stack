'use client';

import styles from './page.module.css';
import Card from './Card';
import Form from './Form';
import { trpc } from '@/utils/trpc';

export default function Home() {
	const { data, isLoading, isError, error } = trpc.items.getItems.useQuery();
	return (
		<div className={styles['main']}>
			<div className={styles['root-container']}>
				<Form />
				{isLoading ? (
					<div>Loading...</div>
				) : isError ? (
					<div>
						<div>Error</div>
						<div>{error.message}</div>
					</div>
				) : (
					<div>
						{data?.map((item) => (
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
				)}
			</div>
		</div>
	);
}
