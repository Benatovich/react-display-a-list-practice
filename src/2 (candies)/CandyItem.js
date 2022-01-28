import './CandyItem.css';
export default function CandyItem({ brand, type, maker }) {
  console.log(brand, type, maker);
  return (
    <div className='candy-item'>
      <p className='brand'>Brand: {brand}</p>
      <p className='type'>Type: {type}</p>
      <p className='maker'>Maker: {maker}</p>
    </div>
  );
}
