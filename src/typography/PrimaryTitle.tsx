import { FC, ReactNode } from "react";

const PrimaryTitle: FC<{ children: ReactNode; style?: string }> = ({
  children, style
}) => {
  return <h1 className={`text-3xl ${style}`}>{children}</h1>;
};

export default PrimaryTitle;
