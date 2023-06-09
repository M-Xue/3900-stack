import type { AppRouter } from '@/src/server/api/root';
import { createTRPCReact } from '@trpc/react-query';

export const trpc = createTRPCReact<AppRouter>();
