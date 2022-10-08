import './employees-list-item.css'

const EmployeesListItem = (props) => {

    const {name, salary, onDelete, onToggleProp, raised, starred, changeSalary} = props;

    let classNames = "list-group-item d-flex justify-content-between";
    if(raised){
        classNames += " raise" ;
    }
    if(starred){
        classNames += " starred" ;
    }
    return (
        <li className={classNames}>
            <span onClick={onToggleProp}
            className="list-group-item-label"
            data-toggle="starred"
            >{name}</span>
            <input onChange={changeSalary} type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button onClick={onToggleProp} type="button"
                    className="btn-cookie btn-sm "
                    data-toggle="raised">
                    <i className="fas fa-cookie"></i>
                </button>

                <button onClick={onDelete} type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )

}

export default EmployeesListItem;