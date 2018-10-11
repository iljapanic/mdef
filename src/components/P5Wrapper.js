import React from 'react';

class P5Wrapper extends React.Component {
  componentDidMount() {
    import('p5/lib/p5.min')
      .then(module => {
        var p5 = module.default;
        this.canvas = new p5(this.props.sketch, this.refs.sketch);
      })
      .catch(error => console.error(error));
  }
  render() {
    return <div ref="sketch" />;
  }
}

export default P5Wrapper;
