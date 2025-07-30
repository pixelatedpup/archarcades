const Card = ({children, borderRadius='rounded-2xl', borderColor = 'border-[#3900AA]', backgroundColour='bg-[var(--secondary)]', fontColour=`text-black`, width="400px", height="351px"}) => {
    return(
    <div className={`${borderRadius} border ${borderColor} p-4 ${backgroundColour} ${fontColour} w-${width} h-${height} `}>
        {children}
    </div>
    );
}

export default Card;