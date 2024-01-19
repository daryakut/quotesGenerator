import classes from "../QuotesList/QuotestList.module.css";

export default function QuoteItem({ text, author }) {
  return (
    <div className={classes.quoteItemContainer}>
      <h1 className={classes.header}>{text}</h1>
      <p className={classes.paragraph}>{author}</p>
    </div>
  );
}
