import classNames from "classnames";

interface GradientTitleProps {
  gradient: string;
  children: React.ReactChild;
}

const GradientTitle = ({ gradient, children }: GradientTitleProps) => {
  return (
    <h2
      className={classNames(
        "font-black",
        "text-3xl sm:text-5xl",
        "bg-clip-text text-transparent",
        "bg-gradient-to-l",
        gradient
      )}
    >
      {children}
    </h2>
  );
};

export default GradientTitle;
