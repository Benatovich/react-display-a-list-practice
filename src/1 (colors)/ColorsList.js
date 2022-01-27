// render list of string
import ColorItem from './ColorItem';
// import './ColorsList.css';

export default function ColorsList(props) {
  return (
    <div className='colors-list'>
      {
        props.colors.map((colors, i) =>
          <ColorItem key={`${colors} + ${i}`} />)
      }
    </div>
  );
}