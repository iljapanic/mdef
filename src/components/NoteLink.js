import React from 'react';
import { Link } from 'gatsby';

const NoteLink = ({ note }) => (
  <div>
    <Link to={`notes/` + note.frontmatter.slug}>
      {note.frontmatter.title} ({note.frontmatter.date})
    </Link>
  </div>
);

export default NoteLink;
