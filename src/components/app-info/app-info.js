import './app-info.css';

const AppInfo = (props) => {
    const {total, numOfRaised} = props;
    return (
        <div className="app-info">
            <h1>List of all employees</h1>
            <h2>Number of employees: {total}</h2>
            <h2>Bonus goes to: {numOfRaised}</h2>
        </div>
    );
}

export default AppInfo;