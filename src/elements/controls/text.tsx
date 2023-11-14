import { WUPTextControl } from "web-ui-pack";
import BaseControl, { BaseControlProps } from "./baseControl";
//
import styles from "./text.m.scss";

WUPTextControl.$use(); // register control in the browser
// set defaults
// WUPTextControl.$defaults.clearButton = true;

interface Props extends Partial<Omit<WUP.Text.Options, "validationRules">>, BaseControlProps {
  initValue?: string;
  value?: string;
  onChange?: WUPTextControl["$onChange"];
}

export default class TextControl extends BaseControl<WUPTextControl, Props> {
  goRender(props: Record<string, unknown>): React.ReactElement {
    return <wup-text {...props} class={`${styles.ctrl} ${this.props.className ?? ""}`.trimEnd()} />;
  }
}
