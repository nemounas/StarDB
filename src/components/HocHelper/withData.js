import React, { Component } from 'react'
import Loding from '../Loding';

const withData = (View, getData) => {
  return class extends Component {

    state = {
      data: null,

    }


    componentDidMount() {

      getData()
        .then((data) => {
          console.log(data)
          this.setState({
            data
          });
        });

    }



    render() {

      const { data } = this.state
      
      if (!data) {
        return (
          <div className="DefautLoderWraper">
            <Loding />
          </div>
        )
      }



      return <View {...this.props} data={data} />
    }

  }
}

export default withData;