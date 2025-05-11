
const ResAccordion = (props) => {
    return (
        <>
        <div className="accordion mb-4"> 
            <button 
                className="flex justify-between items-center w-full p-4 text-left border-0 bg-[#fbfdff] transition duration-300 sm:hover:bg-gray-300"
                onClick={props.toggleAccordion}
            >
                <span className="text-xl font-bold ">{props.title} ({props?.data?.length})</span>
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