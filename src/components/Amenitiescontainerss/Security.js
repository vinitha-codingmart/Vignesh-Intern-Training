import React, { Component } from "react";
import Def from "./Def";
class Security extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="se">
        {/* <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{height:"40px",width:"40px",display:"block",fill:"#60B6B5"}}><path d="m23.57 11.4-1.75-1.76-3.85-3.87-1.78-1.79-2.7-2.71-.82-.83-.22-.23-.06-.06c-.22-.22-.53-.22-.73-.02l-1.75 1.76-3.85 3.87-3.85 3.87-1.75 1.76a1.49 1.49 0 0 0 -.44 1.05v.01c0 .38.15.77.44 1.06l.55.55a1.49 1.49 0 0 0 2.01.08v8.4c0 .81.68 1.45 1.5 1.45h15c .82 0 1.5-.65 1.5-1.45v-8.4c.59.49 1.45.47 2.01-.08l.55-.55c.29-.29.44-.68.44-1.06v-.01c0-.38-.14-.77-.44-1.06zm-3.57 11.16c0 .24-.22.45-.5.45h-15c-.28 0-.5-.21-.5-.45v-9.36l8-7.99 8 7.99zm2.85-9.74-.55.55c-.2.2-.52.2-.71.01l-9.24-9.22a.5.5 0 0 0 -.71 0l-9.24 9.22a.5.5 0 0 1 -.71-.01l-.55-.55a.5.5 0 0 1 -.01-.71l1.75-1.76 3.85-3.87 3.85-3.87 1.4-1.4.77.77 2.7 2.71 1.78 1.79 3.85 3.87 1.75 1.76a.51.51 0 0 1 -.01.71z" fill-rule="evenodd"></path></svg> */}
        <svg
          style={{
            height: "40px",
            width: "40px",
            display: "block",
            overflow: "visible"
          }}
          viewBox="0 0 24 24"
          fill="#60B6B5"
          fill-opacity="0"
          stroke="#60B6B5"
          stroke-width="1"
          focusable="false"
          aria-hidden="true"
          role="presentation"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="m17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8-1.6-1.6-3.8-3.2-6.2-2.7-1.5.2-2.9 1.2-3.6 2.6-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6"
            stroke-linejoin="round"
          ></path>
        </svg>
        <Def
          head="24/7 customer support"
          content="Day or night, we’re here for you. Talk to our support team from anywhere in the world, any time of day."
        />
      </div>
    );
  }
}
export default Security;
