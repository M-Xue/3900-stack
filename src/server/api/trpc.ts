import { initTRPC, type inferAsyncReturnType } from '@trpc/server';
import superjson from 'superjson';
import { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import { prisma } from '../db/db';

export const createContext = (opts: FetchCreateContextFnOptions) => {
	return {
		prisma,
	};
};

const t = initTRPC.context<typeof createContext>().create({
	transformer: superjson,
});

export const router = t.router;
export const middleware = t.middleware;
export const publicProcedure = t.procedure;
