const Card = (props) =>{
    return<div>
  <div classname="card" style={{width : '15rem'}}>
    <img src={props.gambar} classname="card-img-top" alt="..." />
    <div classname="card-body">
      <h4>{props.title}</h4>
      <p>{props.content}</p>
      <a href="#" classname="btn btn-succes">Go for it</a>
    </div>
  </div>
</div>

}
export default Card;