// render list of string
import ColorItem from './ColorItem';
// import './ColorsList.css';

export default function ColorsList(props) {
  const colorsEl = props.colors.map((color, i) => {
    return (
      <ColorItem key={`${color} +${i}`} {...color} />
    );
  }
  );
  return (
    <ul className='colors-list'>
      {colorsEl}
    </ul>
  );
}