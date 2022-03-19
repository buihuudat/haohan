import React from 'react';
import './index.sass';

class UserPage extends React.Component {
  state = {
    showInput: false,
  }
  render() {
    const { user } = this.props;

    return (
      <div className="user-page">
        <div className='user-page-center'>
          <div className='user-page-content'>
            <div className='user-page-content-title'>Account Setting</div>
            <div className='up-content-bottom'>
              <div className='up-content-left'>
                <img src={user.avatar}/>
                <div className='up-content-left-btn'>
                  <label htmlFor="changeAvatar"><button>Change Avatar</button></label>
                  <input onChange={''} type="file" id="changeAvatar"/>
                </div>
              </div>
              <div className='up-content-right'>
                <form>
                  <div className='up-form-label'>
                    <label htmlFor="name">Name</label>
                    <input disabled value={user.fullname} type="text" class="form-control" id="name"/>
                  </div>
                  <div className='up-form-label'>
                    <label htmlFor="email">Email</label>
                    <input disabled value={user.email} type="email" class="form-control" id="email"/>
                  </div>
                  <div className='up-form-label'>
                    <label htmlFor="phone">Phone</label>
                    <input disabled value={user.phone} type="text" class="form-control" id="phone"/>
                  </div>
                  <div className='up-form-label'>
                    <label htmlFor="password">Password</label>
                    <input disabled value={user.password} type="password" class="form-control" id="password"/>
                  </div>
                  <div className='form-btns'>
                    <input type={'button'} className='up-form-submit' value={'Edit'}></input>
                    <input type={'submit'} className='up-form-submit' value='Save'/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserPage;
