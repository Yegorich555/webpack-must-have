import "./styles/main.scss";
// watch: native intellisense and file-peek for aliases from jsconfig.json and with none-js files doesn't work: https://github.com/microsoft/TypeScript/issues/29334
// start-path is 'images' because we have an alias 'images' in webpack.common.js
import { Component, ErrorInfo /* , StrictMode */ } from "react";
import ReactDOM from "react-dom/client";
import TextControl from "./elements/textControl";
import Form from "./elements/form";
import PasswordControl from "./elements/passwordControl";

interface Props {}
interface State {}

class AppContainer extends Component<Props, State> {
  // ["constructor"]: typeof AppContainer;

  constructor(props: Props) {
    super(props);
    this.state = {};
    // test class-dead-code
    const goExclude = true;
    if (!goExclude) {
      console.warn("class-dead-code doesn't work", props);
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("got err", { error, errorInfo });
  }

  render() {
    return (
      // <StrictMode>
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
        <button type="submit">Submit</button>
      </Form>
      // </StrictMode>
    );
  }
}

ReactDOM.createRoot(document.getElementById("app")!).render(<AppContainer />);
