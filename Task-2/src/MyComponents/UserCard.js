const UserCard = ({ email, first_name, last_name, avatar }) => {
  return (
<>

    <div className="container-card col-lg-4 col-sm-6">
    
      <div className="row">


        <div className="card">
          <br /><br />
          <img src={avatar}  className="userimg" alt="..." />
          <div className="card-body">
            <center><h5 className="username">{first_name + ' ' + last_name}</h5></center>
           <center><p className="useremail">{email}</p></center> 
           <br /><br />
            
          </div>

        </div>




      </div>
      
    </div>
    
    </>
    
  )
}

export default UserCard;


