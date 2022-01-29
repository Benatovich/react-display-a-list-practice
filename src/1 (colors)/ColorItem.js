// ColorItem({ color }) should take in a single color item as a prop and render it out
import './ColorItem.css';

export default function ColorItem({ name }) {
  return (
    <div className='color-item'>
      Color name: {name}
    </div>
  );
}