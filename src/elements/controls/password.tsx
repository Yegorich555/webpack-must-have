import { WUPPasswordControl } from "web-ui-pack";
import BaseControl, { BaseControlProps } from "./baseControl";
import styles from "./text.m.scss";

WUPPasswordControl.$use(); // register control in the browser
// WUPPasswordControl.$defaults.clearButton = true;

interface Props extends BaseControlProps<string, WUPPasswordControl, WUP.Password.Options> {
  isStrict?: boolean;
}

const strictValidations: Partial<WUP.Password.ValidityMap> = {
  min: 8,
  max: 64,
  minUpper: 1,
  minLower: 1,
  minNumber: 1,
  special: { min: 1, chars: "!@#$%^&-_" },
};

export default class PasswordControl extends BaseControl<WUPPasswordControl, Props> {
  override updateOptions(p: Props, isInit: boolean): void {
    if (p?.isStrict) {
      // eslint-disable-next-line no-param-reassign
      p = { ...p, validations: { ...p.validations, ...strictValidations } };
    }
    super.updateOptions(p, isInit);
  }

  goRender(props: Record<string, unknown>): React.ReactElement {
    return <wup-pwd {...props} class={`${styles.ctrl} ${props.className}`.trim()} />;
  }
}
