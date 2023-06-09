import { itemRouter } from './routes/items';
import { z } from 'zod';
import { publicProcedure, router } from './trpc';

export const appRouter = router({
	getHello: publicProcedure.query(({ ctx }) => {
		return { hello: 'world' };
	}),
	items: itemRouter,
});

export type AppRouter = typeof appRouter;
