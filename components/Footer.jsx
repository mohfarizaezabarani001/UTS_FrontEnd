const Footer =()=>{
    return(
       <div>
  <form>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      <div id="emailHelp" className="form-text">!!!!! Hati" jangan tertipu </div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" />
    </div>
    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
      <label className="form-check-label" htmlFor="exampleCheck1">cek lah</label>
    </div>
    <button type="submit" className="btn btn-primary">OK</button>
  </form>
</div>

    )
}
export default Footer;