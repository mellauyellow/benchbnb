import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestBenches();
  }

  render() {
    let benchKeys = Object.keys(this.props.benches);
    // debugger
    let benchList = benchKeys.map(benchId => (
      <BenchIndexItem key={benchId} bench={this.props.benches[benchId]} />
    ));

    return (
      <div className="benches">
        <ul>
          {benchList}
        </ul>
      </div>
    );
  }
}

export default BenchIndex;
