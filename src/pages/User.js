import { Outlet } from 'react-router-dom'

function User(){
    return (
        <div>
            <h1>사용자 페이지</h1>
            <Outlet></Outlet>
        </div>
    )
}

export default User;