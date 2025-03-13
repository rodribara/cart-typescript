import { ReactElement } from "react";

type HeadingProps = {
  title: string;
};
const Heading = ({ title }: HeadingProps): ReactElement => <h1>{title}</h1>;

export default Heading;
