export async function GET(request) {
  const users = [
    { id: 1, name: "john" },
    { id: 2, name: "jhane" },
    { id: 3, name: "Bob" },
  ];

  return new Response(JSON.stringify(users));
}
