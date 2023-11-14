import Form from "@/elements/form";
import PasswordControl from "@/elements/controls/passwordControl";
import TextControl from "@/elements/controls/textControl";

export default function Login() {
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
