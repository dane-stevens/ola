import { ActionArgs, json, LoaderArgs } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";
import { Comment } from "~/utils/schema.server";
import { z } from "zod";
import { parseFormData } from "~/utils/validate";
import { Field } from "~/components/Field";
import { Link } from "~/components/Link";
import { Submit } from "~/components/Submit";

// HTTP GET
export const loader = async (args: LoaderArgs) => {
  const comments = await Comment.findAll();
  return json({ comments });
};

// RENDER
export default function DatabaseComments() {
  const { comments } = useLoaderData<typeof loader>();
  const { errors } = useActionData() || {};

  const isUsernameError = errors?.issues?.map((issue) =>
    issue.path.includes("username")
  );

  return (
    <>
      <h1>Database comments</h1>
      {errors && <div>{JSON.stringify(errors)}</div>}
      <form method="post">
        {/* <label>Username:</label>
        <input type="text" name="username" placeholder="Username" />
        {isUsernameError && <div>Username is required</div>}
        <br /> */}
        <Field
          name="username"
          label="Username"
          placeholder="NT000000"
          required
        />
        {/* {isUsernameError && (
          <div style={{ color: "red" }}>
            <i>Username is required</i>
          </div>
        )} */}

        {/* <label>Comment:</label>
        <input type="text" name="comment" placeholder="Comment" />
        <br /> */}
        <Field name="comment" label="Comment" optional />

        {/* <label>Province:</label>
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
        <br /> */}
        <Field
          type="select"
          name="province"
          label="Province"
          options={[
            ["AB", "Alberta"],
            ["BC", "British Columbia"],
            ["MB", "Manitoba"],
            ["NB", "New Brunswick"],
            ["NL", "Newfoundland & Labrador"],
            ["NS", "Nova Scotia"],
            ["NT", "Northwest Territories"],
            ["NU", "Nunavut"],
            ["ON", "Ontario"],
            ["PE", "Prince Edward Island"],
            ["QC", "Quebec"],
            ["SK", "Saskatchewan"],
            ["YT", "Yukon"],
          ]}
        />

        {/* <label>Registration Date:</label>
        <input type="date" name="regDate" />
        <br /> */}
        <Field type="date" name="regDate" label="Registration Date" />

        {/* <label>Email Address:</label>
        <input type="text" name="email" placeholder="Email Address" />
        <br /> */}
        <Field type="text" name="email" label="Email Address" required />
        {/* <label>Sign up for email updates?</label>
        <input type="checkbox" name="emailList" value="on" /> */}

        <Field
          type="checkbox"
          name="emailList"
          label="Sign up for email updates?"
        />

        {/* <button type="submit">Save comment</button> */}
        <Submit type="submit">Save</Submit>
      </form>

      <Link href="https://google.com">Go to google</Link>
      {/* <Test /> */}
      <pre>{JSON.stringify(comments, null, 2)}</pre>
    </>
  );
}

// HTTP POST
export const action = async ({ request }: ActionArgs) => {
  try {
    const data = await parseFormData(request, {
      username: z.string(),
      comment: z.string(),
      province: z.string(),
      regDate: z.date(),
      email: z.string().email(),
      emailList: z.boolean(),
    });

    console.log({ data });

    return Comment.create({ ...data, emailList: Boolean(data.emailList) });
  } catch (err) {
    return json({ errors: err });
  }
};
