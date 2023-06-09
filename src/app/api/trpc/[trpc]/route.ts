import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '../../../../server/api/root';
import { createContext } from '@/src/server/api/trpc';

const handler = (request: Request) => {
	console.log(`incoming request ${request.url}`);
	return fetchRequestHandler({
		endpoint: '/api/trpc',
		req: request,
		router: appRouter,
		createContext,
	});
};

export { handler as GET, handler as POST };
