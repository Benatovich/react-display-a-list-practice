import React from 'react';
import IPItem from './IPItem';
// import './IPList.css';

export default function IPList(props) {
//   console.log(props.IPs);
  const ipsEl = props.IPs.map((ip, i) => {
    // console.log(ip.protagonist.name, 'ip');
    return (
      <IPItem key={`${ip.title} + ${i}`} title={ip.title} genre={ip.genre} protagonist name={ip.protagonist.name} />
    );
  }
  );
  return <ul>
    {ipsEl}
  </ul>;
}

