import React from 'react';
import IPItem from './IPItem';
// import './IPList.css';

export default function IPList({ ips }) {
//   console.log(props.IPs);
  const ipsEl = ips.map((ip, i) => {
    // console.log(ip.protagonist.name, 'ip');
    return (
      <IPItem key={`${ip.title} + ${i}`} {...ip} />
    );
  }
  );
  return <ul>
    {ipsEl}
  </ul>;
}

