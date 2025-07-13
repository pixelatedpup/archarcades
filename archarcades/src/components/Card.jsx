const Card = ({borderRadius='rounded-2xl', borderColor = 'border-[#3900AA]', backgroundColour='bg-[#3900AA]', fontColour=`text-white`}) => {
    return(
    <div className={`${borderRadius} border ${borderColor} p-4 ${backgroundColour} ${fontColour} `}>
        <h3 className="text-3xl">Title </h3>
        <p className="text-xl">Description</p>
    </div>
    );
}

export default Card;