import { publicProcedure, router } from '../trpc';
import { z } from 'zod';

export const userRouter = router({
	getUser: publicProcedure
		.input(z.object({ userId: z.string() }))
		.query(({ input }) => {
			return { id: input.userId, name: 'Max' };
		}),
});
