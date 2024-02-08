import { sql } from "@vercel/postgres";

async function getAllComments() {
  //   await sql`DELETE FROM guestbook`;
  const { rows } = await sql`SELECT * from guestbook`;

  const data = rows.map((row) => row.comment);

  return data;
}

async function postComment(comment: string) {
  const nowDate = new Date().toISOString();
  try {
    await sql`INSERT INTO guestbook (comment, date) VALUES (${comment}, ${nowDate})`;
  } catch (e) {
    throw e;
  }
}

export { getAllComments, postComment };
