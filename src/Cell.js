import React from 'react';

import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Cell(props) {
  console.log(props)
  let styles = {
    'backgroundColor': props.color,
    'width': props.width,
    'height': props.height
  }

  let cell = ''
  if (props.color.slice(1).length === 6) {
    cell = <Col id={ props.color.slice(1) } style={ styles }></Col>
  } else {
    cell = <h2>+ { props.color.slice(1) }</h2>
  }
  return(
    cell
  );
}