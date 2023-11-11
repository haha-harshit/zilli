
const MenuItemList = (props) => {
    return(
        <>
        <li key={props.key}>
            {props.sub_item.card.info.name} - ₹{props.sub_item.card.info.defaultPrice/100 || props.sub_item.card.info.price/100}
        </li>
        </>
    )
}

export default MenuItemList