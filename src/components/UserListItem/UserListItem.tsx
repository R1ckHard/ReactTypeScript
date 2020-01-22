import React from "react";
import "./UserListItem.scss";


export class UserListItem extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        console.log(this.props);
    }

    render() {

        return (
            <>
                {this.props.userList.map((item: any, index: number = 0) => (
                    <div className='userListItem' key={index}>
                        <div className="avatar">
                            <img src={`http://localhost:8000/${item.image}`} alt="image"/>
                        </div>
                        <div className="info">
                            <span>
                                {item.name} {item.surname}
                            </span>
                        </div>
                    </div>
                ))}
            </>
        )
    }


}
