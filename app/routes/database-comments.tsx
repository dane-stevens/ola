import { ActionArgs, json, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Comment } from "~/utils/schema.server";
import { z } from "zod";
import { parseFormData } from "~/utils/validate";

// HTTP GET
export const loader = async (args: LoaderArgs) => {
  const comments = await Comment.findAll();
  return json({ comments });
};

// RENDER
export default function DatabaseComments() {
  const { comments } = useLoaderData<typeof loader>();

  return (
    <>
      <h1>Database comments</h1>
      <form method="post">
        <label>Username:</label>
        <input type="text" name="username" placeholder="Username" />
        <br />

        <label>Comment:</label>
        <input type="text" name="comment" placeholder="Comment" />
        <br />

        <label>Province:</label>
        <select name="province">
          <option value="">Select province/territory...</option>
          <option value="AB">Alberta</option>
          <option value="BC">British Columbia</option>
          <option value="MB">Manitoba</option>
          <option value="NB">New Brunswick</option>
          <option value="NL">Newfoundland & Labrador</option>
          <option value="NS">Nova Scotia</option>
          <option value="NT">Northwest Territories</option>
          <option value="NU">Nunavut</option>
          <option value="ON">Ontario</option>
          <option value="PE">Prince Edward Island</option>
          <option value="QC">Quebec</option>
          <option value="SK">Saskatchewan</option>
          <option value="YT">Yukon</option>
        </select>
        <br />

        <label>Registration Date:</label>
        <input type="date" name="regDate" />
        <br />

        <label>Email Address:</label>
        <input type="text" name="email" placeholder="Email Address" />
        <br />

        <label>Sign up for email updates?</label>
        <input type="checkbox" name="emailList" value="on" />

        <button type="submit">Save comment</button>
      </form>
      {/* <Test /> */}
      <pre>{JSON.stringify(comments, null, 2)}</pre>
    </>
  );
}

// HTTP POST
export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  console.log({ data });

  return Comment.create({ ...data, emailList: Boolean(data.emailList) });
};
