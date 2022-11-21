import { ActionFunction, json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Comment } from "~/utils/schema.server";

// [Creating an instance]
// await Comment.create({ comment: "Hello world!" });
// https://sequelize.org/docs/v6/core-concepts/model-instances/#a-very-useful-shortcut-the-create-method

// HTTP GET
export const loader: LoaderFunction = async () => {
  const comments = await Comment.findAll();
  return json({ comments });
};

// HTTP POST
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  return Comment.create({ comment: data.comment });
};

// RENDER
export default function Create() {
  const { comments } = useLoaderData();
  return (
    <>
      <h1>Database comments</h1>
      <form method="post">
        <input type="text" name="comment" />
        <button type="submit">Save comment</button>
      </form>
      <pre>{JSON.stringify(comments, null, 4)}</pre>
    </>
  );
}
