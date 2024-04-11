import { FC, ReactNode } from "react";

interface Props {
  className?: string;
  children?: ReactNode;
}

export const ContactIcon: FC<Props> = ({ children, className }) => {
  return (
    <div
      className={`flex items-center justify-center rounded-[20px] bg-black w-10 h-10 text-xl transition-all ease-in-out duration-500 hover:scale-110 ${className}`}
    >
      {children}
    </div>
  );
};
