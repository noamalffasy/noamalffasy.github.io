import classNames from "classnames";

interface GradientTitleProps {
  className: string;
  gradient: string;
  children: React.ReactChild;
}

const GradientTitle = ({ className, gradient, children }: GradientTitleProps) => {
  return (
    <h2
      className={classNames(
        "font-black",
        "bg-clip-text text-transparent",
        "bg-gradient-to-l",
        gradient,
        className
      )}
    >
      {children}
    </h2>
  );
};

export default GradientTitle;
