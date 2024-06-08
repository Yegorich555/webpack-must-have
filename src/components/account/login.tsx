import Form from "@/elements/form";
import PasswordControl from "@/elements/controls/password";
import TextControl from "@/elements/controls/text";
import { useEffect, useState } from "react";

export default function Login() {
  const [state] = useState(1);
  useEffect(() => {
    console.warn("test hooks for ESLint", { state });
  }, []);
  return (
    <Form
      onSubmit={(e) => {
        console.warn("will submit with detail:", e.detail);
        return new Promise<boolean>((res) => {
          setTimeout(() => res(true), 1500);
          console.warn("submit/response end");
        });
      }}
    >
      <h2>Login</h2>
      <TextControl name="email" validations={{ required: true, email: true }} />
      <PasswordControl name="password" isStrict validations={{ required: true }} validationShowAll />
    </Form>
  );
}
