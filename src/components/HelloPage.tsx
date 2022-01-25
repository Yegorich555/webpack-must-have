import { FC } from "react";

interface HelloWordsProps {
  words: string;
}

const HelloPage: FC<HelloWordsProps> = ({ words }) => <div>{words}</div>;

export default HelloPage;
