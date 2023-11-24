import { WUPTextControl } from "web-ui-pack";
import BaseControl, { BaseControlProps } from "./baseControl";
import styles from "./text.m.scss";

WUPTextControl.$use(); // register control in the browser
// WUPTextControl.$defaults.clearButton = false;

interface Props extends BaseControlProps<string, WUPTextControl, WUP.Text.Options> {}

export default class TextControl extends BaseControl<WUPTextControl, Props> {
  goRender(props: Record<string, unknown>): JSX.Element {
    return <wup-text {...props} class={`${styles.ctrl} ${props.className}`.trim()} />;
  }
}
