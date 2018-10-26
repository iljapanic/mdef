import React from 'react';
import Img from 'gatsby-image';
import classNames from 'classnames';

// styles
import styles from '../css/components/Book.module.css';

const Book = ({ book }) => {
  const title = book.title;
  const author = book.author;
  const year = book.year;
  const cover = book.image.childImageSharp.fluid;
  const goodreads = book.goodreads;

  const getClassNames = () => {
    return classNames(styles.book, {
      [styles.featured]: book.featured === true
    });
  };

  return (
    <article className={getClassNames()}>
      {console.log(book)}
      <div className={styles.cover} data-year={year}>
        <a href={goodreads} target="_blank" rel="noopener noreferrer">
          <Img fluid={cover} />
        </a>
      </div>
      <div className={styles.meta}>
        <h3 className={styles.title}>
          <a href={goodreads} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
        <div className={styles.author}>{author}</div>
      </div>
    </article>
  );
};

export default Book;
