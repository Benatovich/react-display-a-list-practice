// import './IPItem.css';
export default function IPItem(props) {
    // cool zone
  return (
    <div className='ip-item'>
      <p className='title'>Title: {props.title}</p>
      <p className='genre'>Genre: {props.genre}</p>
      <div className='protagonist'>
        <p className='name'>Name: {props.protagonist.name}</p>
        <p className='faction'>Faction: {props.protagonist.faction}</p>
        <p className='equipment'>Equipment: {props.protagonist.equipment}</p>
      </div>
    </div>
  );
}