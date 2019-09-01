import React, { Component } from 'react'


class VenuePage extends Component {
  render () {
    const iframe = "<iframe src=\"\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>";
    return (
        <div>
          <h1>Venue</h1>
          <iframe height="600" width="100%" allowFullScreen src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.315551864026!2d77.63975591539068!3d12.88741969091114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14b023dade9d%3A0x35272e55303bd711!2sDayananda+Sagar+University!5e0!3m2!1sen!2sin!4v1549011291147" />
        </div>
      )
    }
}

export default VenuePage
