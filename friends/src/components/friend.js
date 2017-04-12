import React from 'react';

class Friend extends React.Component {
    render() {
        return(
            <li className='friend'>
	            <img className="profile-pic" src='http://placebear.com/50/50.jpg' />

		        <h3>Cali Fornia</h3>

		        <div className="location">
			        Location: New Port Beach, California, United States
		        </div>

		        <div className="status">
			        Status: I hate the snow. I wish I was on the beach right now!!! <span className="hashtag">#ihateprovo</span>
		        </div>

		        <div className="num-friends">
			        Friends: 1,367
		        </div>
            </li>
        );
    };
}

export default Friend;