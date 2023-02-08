export async function fetchUsers() {
  return await (
    await fetch('https://jsonplaceholder.typicode.com/users')
  ).json();
}
