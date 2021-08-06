import classNames from "classnames";

interface CircleProps {
  className: string;
  color: string;
  children: React.ReactChild;
}

const Circle = ({ className, color, children }: CircleProps) => {
  return (
    <div
      className={classNames("inline-block", "rounded-full", className)}
      style={{ backgroundColor: color }}
    >
      {children}
    </div>
  );
};

export default Circle;
