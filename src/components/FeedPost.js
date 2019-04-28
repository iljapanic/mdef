import React from 'react';
import MicrolinkCard from 'react-microlink';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

// css
import styles from '../css/components/FeedPost.module.css';
import '../css/utils/microlink.css';

dayjs.extend(relativeTime);

const Tag = props => <li className={styles.tag}>{props.tag}</li>;

export default ({ post }) => {
  const title = post.title;
  const relativeDate = dayjs(post.timestamp).fromNow();
  const url = post.url;
  var notesHtml = '';
  const tagsData = post.tags;
  const tags = tagsData.map(tag => <Tag key={tag.id} tag={tag.data.name} />);

  if (post.notes) {
    notesHtml = post.notes.childMarkdownRemark.html;
  }

  return (
    <article className={styles.post}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <div className={styles.notes} dangerouslySetInnerHTML={{ __html: notesHtml }} />
        <div className={styles.date}>Posted {relativeDate}</div>
        <ul className={styles.tags}>{tags}</ul>
      </div>
      <div className={styles.preview}>
        <MicrolinkCard url={url} target="_blank" size="large" />
      </div>
    </article>
  );
};
