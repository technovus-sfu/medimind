import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

const Navigation = () => {
	return (
		<div id="navigation" className="container p-4">
			<div className="row">
				<div className="col">
					<Link to="/meditate"><i className="fas fa-headphones fa-2x"></i></Link>
				</div>
				<div className="col">
					<Link to="/"> <i className="fas fa-comment-alt fa-2x"></i></Link>
				</div>
				<div className="col">
					<Link to="/resources"><i className="fas fa-file-alt fa-2x"></i></Link>
				</div>
			</div>
      	</div>
     );
}

class Dashboard extends React.Component {
    render() {
        return (
            <div className="chatroom d-flex flex-column">
            	<header className="mb-auto">
            		<div>img</div>
        		</header>
            	<Navigation />
            </div>		
        );
    }
}

export default Dashboard;