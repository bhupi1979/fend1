export function Studentform(){
    return(
        <>
        <div className="container w-50 my-5">
        <form>
        <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label"> Enter Name</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"> Enter Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label"> Enter comments</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</>

        
    )
}