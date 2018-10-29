import React from 'react';
import Img from 'gatsby-image';
import Lightbox from 'react-images';

// styles
import styles from '../css/components/Gallery.module.css';

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shareOpen: false,
      anchorEl: null,
      lightbox: false,
      photos: props.photos.map(photo => Object.assign({ src: photo.sizes.src }))
    };
  }

  gotoPrevLightboxImage() {
    const { photo } = this.state;
    this.setState({ photo: photo - 1 });
  }

  gotoNextLightboxImage() {
    const { photo } = this.state;
    this.setState({ photo: photo + 1 });
  }

  openLightbox(photo, event) {
    event.preventDefault();
    this.setState({ lightbox: true, photo });
  }

  closeLightbox() {
    this.setState({ lightbox: false });
  }

  render() {
    const { photos } = this.props;
    return (
      <div>
        <div className={styles.gallery}>
          {photos.map((photo, i) => (
            <a
              key={i}
              href={photo.sizes.src}
              onClick={e => this.openLightbox(i, e)}
              className={styles.thumbnail}
            >
              <Img fluid={photo.fluid} />
            </a>
          ))}
        </div>
        <Lightbox
          backdropClosesModal
          images={this.state.photos}
          currentImage={this.state.photo}
          isOpen={this.state.lightbox}
          onClickPrev={() => this.gotoPrevLightboxImage()}
          onClickNext={() => this.gotoNextLightboxImage()}
          onClose={() => this.closeLightbox()}
          width={1600}
          imageCountSeparator=" / "
          spinnerColor="#5a5a5b"
        />
      </div>
    );
  }
}
