import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component{

	constructor(props){
		super(props);
		this.state = {
			data: [
				{name: "Nastya S.", salary: 2500, raised: false, starred: false, id: 1},
				{name: "Sonya O.", salary: 2000, raised: false, starred: true, id: 2},
				{name: "Sasha S.", salary: 2700, raised: true, starred: false, id: 3},
				{name: "Lisa M.", salary: 4000, raised: false, starred: false, id: 4}
			],
			searchPhrase: '',
			filter: 'all'
		};
		this.maxId = 4;
	}


	deleteItem = (id) =>{
		this.setState(({data})=>{
			const newData = data.filter(item => item.id !== id);
			return {
				data: newData
			}
		});
	}

	addItem = (e, name, salary) => {
		e.preventDefault();
		if(name !== '' && salary !== ''){

			const newItem = {
				name: name,
				salary: salary,
				raised: false,
				id: ++this.maxId
			}

			this.setState(({data}) => {
				console.log(`adding ${name} ${salary}`);
				const newData = [...data, newItem];
				return {
					data: newData
				}
			});
		}
		else {
			console.log('empty');
		}
		
	}


	onToggleProp = (id, prop) => {
		this.setState(({data}) => ({
			data: data.map(item => {
				if(item.id === id){
					return {...item, [prop]: !item[prop]}
				}
				return item;
			})
		}));
	}

	searchEmp = (items, phrase) => {
		if(!phrase.length){
			return items;
		}
		return items.filter(item => {
			return item.name.indexOf(phrase) > -1;
		}

		);
	}

	onUpdateSearch = (searchPhrase) => {
		this.setState({searchPhrase});
	}

	onClickButton = (filter) =>{
		this.setState({filter});
	}

	filterData = (items, filter) => {
		switch(filter){
			case 'all':
				return items;
			case 'starred':
				return items.filter(item => item.starred );
			case 'salaryMoreThan100':
				return items.filter(item => item.salary > 100);
			default:
				console.log('unknown filter');
		}
	}

	changeSalary = (id, input) => {
		const amount = parseFloat(input);
		console.log(`change ${id} salary ${amount}`);
		if(amount > 0){
			this.setState(({data}) => ({
				data: data.map(item => {
					if(item.id === id){
						return {...item, salary: amount}
					}
					return item;
				})
			}));
		}
		
	}

	render(){
		const {data, searchPhrase, filter} = this.state;
		const totalEmployees = data.length;
		const numOfRaisedEmployees = data.filter(item => item.raised === true).length;
		const visibleData = this.searchEmp(this.filterData(data, filter), searchPhrase);
		return (
			<div className="app">
			   <AppInfo total={totalEmployees}
			   numOfRaised={numOfRaisedEmployees}/>
	
			   <div className="search-panel">
				<SearchPanel
					onUpdateSearch={this.onUpdateSearch}
				/>
				<AppFilter
				onClickButton={this.onClickButton}
				filter={filter}/>
			   </div>
	
			   <EmployeesList
					data={visibleData}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
					changeSalary={this.changeSalary}
					/>

			   <EmployeesAddForm
					onSubmit={this.addItem}/>
			</div>
		)
	}
}

export default App;