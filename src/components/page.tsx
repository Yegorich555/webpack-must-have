import { PageProps } from "@/interfaces";

export default function Page({ style, children }: PageProps) {
  return (
    <div className={style}>
      <h1>{children}</h1>
    </div>
  );
}
