import React from 'react';
import Img from 'gatsby-image';

// styles
import styles from '../css/components/Book.module.css';

const Book = ({ book }) => {
  const title = book.title;
  const author = book.author;
  const year = book.year;
  const cover = book.image.childImageSharp.fluid;
  const goodreads = book.goodreads;

  return (
    <article className={styles.book}>
      <div className={styles.year}>{year}</div>
      <div className={styles.cover}>
        <a href={goodreads} target="_blank" rel="noopener noreferrer">
          <Img fluid={cover} />
        </a>
      </div>
      <h3 className={styles.title}>
        <a href={goodreads} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h3>
      <div className={styles.author}>{author}</div>
    </article>
  );
};

export default Book;
