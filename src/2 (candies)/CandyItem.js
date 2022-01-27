export default function CandyItem(props) {
  return (
    <div className='candy-item'>
      <span className='brand'>{props.brand}</span>
      <span className='type'>{props.type}</span>
      <span className='maker'>{props.maker}</span>
    </div>
  );
}