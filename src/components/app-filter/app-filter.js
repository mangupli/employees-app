import './app-filter.css'

const AppFilter = (props) => {

    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'starred', label: 'На повышение'},
        {name: 'salaryMoreThan100', label: 'ЗП больше 100$'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = name === props.filter;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return <button
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={()=>props.onClickButton(name)}>
                {label}
                </button>
    });

    return (
        <div className="btn-group">
           {buttons}
        </div>
    );

}

export default AppFilter;