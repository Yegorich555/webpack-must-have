/* eslint-disable @typescript-eslint/no-explicit-any */
import WUPBaseElement from "web-ui-pack/baseElement";

/** Base React wrapper for web-ui-pack elements */
export default abstract class BaseWUP<
  T extends WUPBaseElement = WUPBaseElement,
  P extends Record<string, any> = object,
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateOptions(nextProps: P, _isInit: boolean): void {
    Object.assign(this.domEl.$options, nextProps, { children: null });
  }

  abstract goRender(props: React.ClassAttributes<HTMLDivElement> & { class?: string }): JSX.Element;

  render(): JSX.Element {
    return this.goRender({
      class: this.props.className,
      ref: (el) => {
        this.domEl = el || (this.domEl as any) || ({} as any);
      },
    });
  }
}
