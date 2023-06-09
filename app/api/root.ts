import { userRouter } from './routes/users';
import { z } from 'zod';
import { publicProcedure, router } from './trpc';

export const appRouter = router({
	getHello: publicProcedure.query(({ ctx }) => {
		return { hello: 'world' };
	}),
	users: userRouter,
});

export type AppRouter = typeof appRouter;
