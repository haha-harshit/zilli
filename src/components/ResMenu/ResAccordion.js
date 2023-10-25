
const ResAccordion = (props) => {
    return (
        <>
        <div className="accordion border rounded-md mb-1"> 
            <button 
                className="w-full p-4 text-left bg-gray-50 transition duration-300 sm:hover:bg-gray-300"
                onClick={props.toggleAccordion}
            >
                {props.title}
                <span className={`float-right transform ${props.accIsOpen ?
                                 'rotate-180' : 'rotate-0'}
                                 transition-transform duration-300`}>
                    &#9660;
                </span> 
            </button> 
            {props.accIsOpen && ( 
                <div className="p-4 bg-white"> 
                    {props.data} 
                </div> 
            )} 
        </div> 
        </>
    )
}

export default ResAccordion