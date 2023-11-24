/* eslint-disable @typescript-eslint/no-explicit-any */
import WUPBaseControl from "web-ui-pack/controls/baseControl";
import BaseWUP from "../baseWUP";

interface BaseControlP<T, C extends WUPBaseControl<any, any, any>> {
  className?: string;
  onChange?: C["$onChange"];

  initValue?: T;
  value?: T;
}

export type BaseControlProps<
  T = any,
  C extends WUPBaseControl<any, any, any> = WUPBaseControl<any, any, any>,
  O extends WUP.BaseControl.Options<any, any> = WUP.BaseControl.Options<any, any>,
  // exclude some options because better to redefine it in static $defaults
> = Partial<Omit<O, "validationRules" | "validateDebounceMs">> & BaseControlP<T, C>;

export default abstract class BaseControl<
  T extends WUPBaseControl = WUPBaseControl,
  P extends BaseControlProps = BaseControlProps,
> extends BaseWUP<T, P> {
  override updateOptions(nextProps: P, isInit: boolean): void {
    super.updateOptions(nextProps, isInit);

    this.domEl.$onChange = nextProps.onChange;
    if (isInit || nextProps.value !== this.props.value) {
      this.domEl.$value = nextProps.value; // update only if value changed
    }
    if (isInit || nextProps.initValue !== this.props.initValue) {
      this.domEl.$initValue = nextProps.initValue; // update only if value changed
    }
  }
}
