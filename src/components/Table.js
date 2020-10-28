import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class Table extends Component {
	constructor() {
        super()
		this.people = [
			{
				name: "John Sina",
				birth: "11/30/2011"
			}, {
				name: "Barcy Washington",
				birth: "09/16/1992"
			}, {
				name: "Peter Parker",
				birth: "01/16/1992"
			}, {
				name: "Jimmy Shergil",
				birth: "12/12/2001"
			}, {
				name: "Alexander Alfred",
				birth: "02/09/1891"
			}, {
				name: "Krishna Gupta",
				birth: "12/01/1982"
			}, {
				name: "Sania Mirza",
				birth: "11/30/2011"
			}, {
				name: "Lata Pathak",
				birth: "10/31/1999"
			}
		];
	}
	compareDates(a, b) {
		// complete this date comparator which enables sort by age
		let dateA=new Date(a.birth), dateB=new Date(b.birth)
		return dateA-dateB //sort by date ascending
	}

	compareNames(a, b) {
		// complete this string comparator with enables sort by name
			let nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
			if (nameA < nameB) //sort string ascending
					return -1 
			if (nameA > nameB)
					return 1
			return 0 //default return value (no sorting)
	}
	renderRows() {
		if(this.props.sortParameter === "name") {
			this.people.sort(this.compareNames)
		}

		if(this.props.sortParameter === "age") {
			this.people.sort(this.compareDates)
		}



		return this.people.map(v => {
			
			return (
				<tr>
					<td>{v.name}</td>
					<td>{v.birth}</td>
				</tr>
			)
		})

	}

	render() {
		return (
	<div className='table-div'>
	{this.props.sortParameter}
    <table className='table table-striped table-bordered table-hover full-width'>
      <thead>
        <tr>
          <th className='course-name'>Person Name</th>
          <th className='duration'>Date of Birth</th>
        </tr>
      </thead>
			<tbody>
				{this.renderRows()}

      </tbody>
    </table>
  </div>
);

	}
}

// Uncomment the snippet below
Table.propTypes = {
	sortParameter: PropTypes.string
}

export default Table;
