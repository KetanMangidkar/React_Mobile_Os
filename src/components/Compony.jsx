
import '../Compony.css';
function Compony(products){

    return(
        <div>
            <Heading title={products.data.title}/>
            <List items={products.data.items} />
        </div>
    )
}

function Heading(products){
    return (<h1>{products.title}</h1>)
}

function List(products){
    return (<ul><b>{
                products.items.map(elem => <li className={elem.listStyle ? elem.listStyle : 'disc'}>{elem.product}</li>)
        }</b></ul>)
}

export default Compony;