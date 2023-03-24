import { ReactNode } from "react";
import { COLORS } from "shared/colors";

interface HighlightTextProps {
  children: ReactNode;
  color?: string;
}

const HighlightText = ({
  children,
  color = COLORS["orange"],
}: HighlightTextProps) => {
  return (
    <span style={{ color: color }} className="textHighlight">
      {children}
    </span>
  );
};

export default HighlightText;
