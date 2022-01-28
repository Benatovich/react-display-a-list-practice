// import './IPItem.css';
export default function IPItem({ title, genre, protagonist }) {
    // cool zone
  return (
    <div className='ip-item'>
      <p className='title'>Title: {title}</p>
      <p className='genre'>Genre: {genre}</p>
      <div className='protagonist'>
        <p className='name'>Name: {protagonist.name}</p>
        <p className='faction'>Faction: {protagonist.faction}</p>
        <p className='equipment'>Equipment: {protagonist.equipment}</p>
      </div>
    </div>
  );
}