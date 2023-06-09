'use client';

import React from 'react';
import styles from './page.module.css';
import { UUID } from 'crypto';
import { ItemType } from '../types/types';

export default function Card({ item }: { item: ItemType }) {
	return (
		<div>
			<div className={styles['card']}>{item.title}</div>
		</div>
	);
}
