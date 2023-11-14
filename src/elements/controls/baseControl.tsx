/* eslint-disable @typescript-eslint/no-explicit-any */
import WUPBaseControl from "web-ui-pack/controls/baseControl";

export interface BaseControlProps /* extends Pick<Partial<WUP.BaseControl.Options>, "name" | "label"> */ {
  className?: string;
  initValue?: any;
  value?: any;
  onChange?: WUPBaseControl["$onChange"];
}

export default abstract class BaseControl<
  T extends WUPBaseControl = WUPBaseControl,
  P extends BaseControlProps = BaseControlProps,
> extends React.Component<P> {
  domEl = {} as T;

  /* Called every time when DOM element is appended to document */
  componentDidMount(): void {
    this.updateOptions(this.props, true);
  }

  /* Called every time when properties are changed */
  shouldComponentUpdate(nextProps: Readonly<P>): boolean {
    const isChanged = this.props !== nextProps;
    isChanged && this.updateOptions(nextProps, false);
    // update render only if className is changed otherwise apply props directly for options
    return this.props.className !== nextProps.className;
  }

  /* Apply React props for $options */
  updateOptions(nextProps: P, isInit: boolean): void {
    Object.assign(this.domEl.$options, nextProps, { children: null });
    this.domEl.$onChange = nextProps.onChange;
    if (isInit || nextProps.value !== this.props.value) {
      this.domEl.$value = nextProps.value; // update only if value changed
    }
    if (isInit || nextProps.initValue !== this.props.initValue) {
      this.domEl.$initValue = nextProps.initValue; // update only if value changed
    }
  }

  abstract goRender(props: React.ClassAttributes<HTMLDivElement> & { class?: string }): React.ReactElement;

  render(): React.ReactNode {
    return this.goRender({
      class: this.props.className,
      ref: (el) => {
        this.domEl = el || (this.domEl as any) || ({} as any);
      },
    });
  }
}
