import React from 'react';
import FriendView from './friend';

class FriendsList extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          searchText: "",
		  orderBy: "name",
		  order: "ascending"
      }
  }

  handleChange(field, event) {
		this.setState({[field]: event.target.value});
	}

  render() {
    return (
        <div>
	        <form className="form-inline searchForm" role="form">
		        <div className="form-group">

			        <input 
                        className="form-control" 
                        onChange={this.handleChange.bind(this, "searchText")} 
                        placeholder="Search For Friends" 
                        value={this.state.searchText}
                    />

                    <select 
                        className="input-medium" 
                        value={this.state.orderBy}
                        onChange={this.handleChange.bind(this, "orderBy")}
                    >
                        <option value="name">Name</option>
						<option value="friend_count"># of Friends</option>
                    </select>

                    <select 
                        className="input-medium" 
                        value={this.state.order}
                        onChange={this.handleChange.bind(this, "order")}
                    >
                        <option value="descending">Descending</option>
						<option value="ascending">Ascending</option>
                    </select>

		        </div>
	        </form>

	        <ul>
                <FriendView/>
	        </ul>
        </div>
    );
  }
}

export default FriendsList;
