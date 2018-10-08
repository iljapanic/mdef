import React from 'react';
import { Link } from 'gatsby';

// styles
import styles from '../css/components/NoteLink.module.css';

const NoteLink = ({ note }) => (
  <article className={styles.noteLink}>
    <Link to={`notes/` + note.frontmatter.slug + `/`}>
      <h2 className={styles.noteLink__title}>{note.frontmatter.title}</h2>
      <div className={styles.noteLink__meta}>
        {note.frontmatter.date} – {note.frontmatter.endDate}
      </div>
    </Link>
  </article>
);

export default NoteLink;
