
const MenuItemList = (props) => {
    return(
        <>
        <li className="list-none" key={props.key}>
            <div className="font-bold">{props.sub_item.card.info.name} -</div> ₹{props.sub_item.card.info.defaultPrice/100 || props.sub_item.card.info.price/100}
        </li>
        
        </>
    )
}

export default MenuItemList