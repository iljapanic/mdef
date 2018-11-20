import React from 'react';
import MicrolinkCard from 'react-microlink';

// css
import css from '../css/components/LinkPreview.module.css';

class LinkPreview extends React.Component {
  render() {
    const url = this.props.url;
    const size = this.props.size;
    return (
      <div className={css.preview}>
        <MicrolinkCard url={url} size={size} target="_blank" />
      </div>
    );
  }
}

export default LinkPreview;
