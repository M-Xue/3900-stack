import { publicProcedure, router } from '../trpc';
import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';

export const itemRouter = router({
	getItem: publicProcedure
		.input(z.object({ itemId: z.string() }))
		.query(async ({ ctx, input }) => {
			const item = await ctx.prisma.item.findFirstOrThrow({
				where: {
					id: input.itemId,
				},
			});

			return item;
		}),
	getItems: publicProcedure.query(async ({ ctx }) => {
		const items = await ctx.prisma.item.findMany();
		return items;
	}),
	createItem: publicProcedure
		.input(z.object({ title: z.string() }))
		.mutation(async ({ ctx, input }) => {
			const item = await ctx.prisma.item.create({
				data: {
					id: uuidv4(),
					title: input.title,
				},
			});

			return item;
		}),
	deleteItem: publicProcedure
		.input(z.object({ id: z.string() }))
		.mutation(async ({ ctx, input }) => {
			const item = await ctx.prisma.item.delete({
				where: {
					id: input.id,
				},
			});

			return item;
		}),
});
