export default function Card(props) {
  return (
    <div className="card">
      <img src={`./src/assets/${props.coverImg}`} className="card--image"></img>
      <div className="card-stats">
        <img src="./src/assets/star.jpg" className="star"></img>
        <span>{props.stats.rating}</span>
        <span className="gray">{props.stats.reviewcount}</span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.price}</span> /person
      </p>
    </div>
  );
}
