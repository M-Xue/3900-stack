This is an example set up for the technologies used for COMP3900 group project.

# The Stack

The technologies used are as follows:
- Next.js 13 (app directory)
- tRPC
- Zod for schema validation
- Prisma for a database ORM
- React Query
- Zustand for state management
- classnames for CSS utility
- Headless UI/Radix UI for UI components
- Lucide Icons

## Next.js 13 (app directory)

### Why
I don't know, I just picked this because theres hype around it. I don't really get its improvements over v12 apart from maybe smaller bundle sizes. We won't be using the native server api endpoints and will instead be using tRPC.

### Resources

[Documentation](https://nextjs.org/docs)

Video Guides:
- [ Next.js 13 - The Basics ](https://www.youtube.com/watch?v=__mSgDEOyv8)
- [ Next.js App Router: Routing, Data Fetching, Caching ](https://www.youtube.com/watch?v=gSSsZReIFRk)
- [ Learn Next.js 13 With This One Project ](https://www.youtube.com/watch?v=NgayZAuTgwM)
  - This one is not necessary but has some other interesting features for Next.js 13

## tRPC

### Why

tRPC is a really great tool to make your routes type safe. It makes it so that the body data of your API requests are typed and provides autocompletion for your routes too. Think of it as the alternative for fetch requests. Instead of making a `fetch()` call and sending an untyped JSON object as the data payload, you call a function directly in the frontend and pass the data as a typed object. tRPC will raise an error if your object and its fields are of the wrong type.
### Resources

[Documentation](https://trpc.io/docs/getting-started)  
[Video Guide](https://www.youtube.com/watch?v=UfUbBWIFdJs)

## Zod

### Why

We use Zod with tRPC to validate the object argument we give to our tRPC route.

### Resources

[Documentation](https://zod.dev/)

Video Guides:
- [Learn Zod in 30 minutes](https://www.youtube.com/watch?v=L6BE-U3oy80)
  - This one is really all you need
- [ Zod Goes Where TypeScript Can't ](https://www.youtube.com/watch?v=o4h8PUVy5J8)
- [ Blazing Fast Tips: Build ANYTHING with Zod + Generics ](https://www.youtube.com/watch?v=9N50YV5NHaE)

## Prisma

### Why
Similar to tRPC, Prisma gives us type safety and auto complete when interacting with our database. Using consists of calling methods on an object corelating to the table schema you are trying to query/mutate. It consists of its own schema language. You should download the Prisma VSCode Extension for it.

### Resources

[Documentation](https://www.prisma.io/docs)  
[Video Guide](https://www.youtube.com/watch?v=E37-33M6Ypk)

## React Query

### Why
React Query is a really great wrapper around your interactions between the client and the server because it provides things like refetching, caching (best part), request state and more.

### Resources

[Documentation](https://tanstack.com/query/v4/docs/react/overview)  
[Video Guide](https://www.youtube.com/watch?v=r8Dg0KVnfMA)

