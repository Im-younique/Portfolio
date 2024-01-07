// styles
import classes from "./content.module.scss";

interface IProp {
  title: string;
  children: React.ReactNode;
}

const BoxContent = ({ title, children }: IProp) => {
  const [text1, text2] = title.split(" ");
  return (
    <div className={classes.content}>
      <div className={classes.pageTitle}>
        <span>{`${text1} `}</span>
        <span className={classes.impactText}>{text2}</span>
      </div>
      <div className={classes.pageContent}>{children}</div>
    </div>
  );
};

export default BoxContent;
