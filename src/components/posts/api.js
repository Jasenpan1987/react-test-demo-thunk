const END_POINT = "https://jsonplaceholder.typicode.com/posts";

export async function getPosts() {
  const response = await fetch(END_POINT);
  return await response.json();
}
