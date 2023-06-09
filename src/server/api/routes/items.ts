import { publicProcedure, router } from '../trpc';
import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';
import { PrismaClient } from '@prisma/client';

export const itemRouter = router({
	getItem: publicProcedure
		.input(z.object({ itemId: z.string() }))
		.query(async ({ input }) => {
			const prisma = new PrismaClient();
			const item = await prisma.item.findFirstOrThrow({
				where: {
					id: input.itemId,
				},
			});

			return item;
		}),
	getItems: publicProcedure.query(async (a) => {
		const prisma = new PrismaClient();
		const items = await prisma.item.findMany();
		return items;
	}),
	createItem: publicProcedure
		.input(z.object({ title: z.string() }))
		.mutation(async ({ input }) => {
			const prisma = new PrismaClient();
			const item = await prisma.item.create({
				data: {
					id: uuidv4(),
					title: input.title,
				},
			});

			return item;
		}),
	deleteItem: publicProcedure
		.input(z.object({ id: z.string() }))
		.mutation(async ({ input }) => {
			const prisma = new PrismaClient();
			const item = await prisma.item.delete({
				where: {
					id: input.id,
				},
			});

			return item;
		}),
});
