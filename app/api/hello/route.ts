export async function GET(request: Request) {
  // return new Response('Hello, Next.js!')
  // response json
  return new Response(JSON.stringify({ message: 'Hello, Next.js!' }));
}
