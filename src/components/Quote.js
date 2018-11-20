import React from 'react';
import ReactMarkdown from 'react-markdown';

// css
import css from '../css/components/Quote.module.css';

class LinkPreview extends React.Component {
  render() {
    const author = this.props.author;
    const content = this.props.children;
    var reference = '';

    if (this.props.reference) {
      reference = (
        <sup id={`fnref-${this.props.reference}`}>
          <a href={`#fn-${this.props.reference}`}>{this.props.reference}</a>
        </sup>
      );
    }

    return (
      <div className={css.quote}>
        <blockquote>{content}</blockquote>
        <div className={css.author}>
          — {author} {reference}
        </div>
      </div>
    );
  }
}

export default LinkPreview;
