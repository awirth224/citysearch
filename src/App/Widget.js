import React, { Component } from "react";

class Widget extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    <script async class="teleport-widget-script" data-url="https://teleport.org/cities/aarhus/widget/scores/?currency=USD" data-max-width="770" data-height="1008" src="https://teleport.org/assets/firefly/widget-snippet.min.js"></script>
  }

  render() {
    return (
      <div>
        <a class="teleport-widget-link">Life quality score</a>
        <script async class="teleport-widget-script" data-url="https://teleport.org/cities/aarhus/widget/scores/?currency=USD" data-max-width="770" data-height="1008" src="https://teleport.org/assets/firefly/widget-snippet.min.js"></script>
      </div>
    )
  }
}

export default Widget