import { itemRouter } from './routes/items';
import { z } from 'zod';
import { publicProcedure, router } from './trpc';
import { TRPCError } from '@trpc/server';

export const appRouter = router({
	getHello: publicProcedure.query(({ ctx }) => {
		return { hello: 'world' };
	}),
	getError: publicProcedure.query(() => {
		throw new TRPCError({ message: 'Test Error', code: 'BAD_REQUEST' });
	}),
	items: itemRouter,
});

export type AppRouter = typeof appRouter;
