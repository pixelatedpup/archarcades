const Card = ({children, borderRadius='rounded-2xl', borderColor = 'border-[#3900AA]', backgroundColour='bg-[var(--light)]', fontColour=`text-[var(--darkG)]`, width="400px", height="351px", hover=false}) => {
    return(
    <div className={`${borderRadius} border ${borderColor} p-4 ${hover?"bg-[var(--dark)]":backgroundColour} ${hover?"text-white":fontColour} w-${width} h-${height} `}>
        {children}
    </div>
    );
}

export default Card;