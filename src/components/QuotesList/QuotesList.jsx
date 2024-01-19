import { useState } from "react";
import { quotes as importedQuotes } from "../../utils/quotes";
import QuoteItem from "../QuoteItem/QuoteItem";
import classes from "./QuotestList.module.css";

function QuotesList() {
  const generateQuote = (quotes) => {
    let index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
  };

  const [quote, setQuote] = useState(() => generateQuote(importedQuotes));

  // if (!importedQuotes || importedQuotes.length === 0) {
  //   return <div>No quotes available</div>;
  // }

  return (
    <div className={classes.quotesContainer}>
      <QuoteItem key={quote.id} {...quote} />

      <button
        className={classes.nextBtn}
        onClick={() => {
          setQuote(generateQuote(importedQuotes));
        }}
      >
        Next quote
      </button>
      <div className={classes.sourceCodeLink}>
        <a
          href="https://github.com/daryakut/quotesGenerator.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Source Code on GitHub
        </a>
      </div>
    </div>
  );
}

export default QuotesList;
