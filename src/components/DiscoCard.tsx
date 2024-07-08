import { DiscoType } from "../repo/disco.type";
import { Link } from "react-router-dom";
import "./DiscoCard.css";

type DiscoCardType = {
    disco: DiscoType;
    detailPath: string;
};


const DiscoCard = ({ disco, detailPath }: DiscoCardType) => {
    const { name, coverImage, data, ora, description, tags, isAperitivoIncluded, price } = disco;

    let testoDaStampare;
    let coloreTesto;

    if (isAperitivoIncluded) {
        testoDaStampare = "Drink included";
        coloreTesto = "green";
    } else {
        testoDaStampare = "Drink not included";
        coloreTesto = "red";
    }

    return (
        <>
            <Link className="hover:bg-gradient md:pb-5 md:px-2" to={detailPath}>
                <div className="max-w-sm rounded overflow-hidden shadow-lg m-3 h-full">
                    <img className="w-full" src={coverImage}></img>
                    <div className="px-6 py-4 bg-white">
                        <div className="font-bold text-xl mb-2 ">{name}</div>
                        <h4 className="text-black text-sm mb-2">
                            Date: {data} Start at: {ora}
                        </h4>
                        <p className="text-gray-700 text-base">
                            {description.short}
                        </p>

                        <p className="font-bold" style={{color: coloreTesto}}>{testoDaStampare}</p>

                        <p>Price: ${price}</p>

                    </div>
                    <div className=" bg-white h-full px-2">
                        {tags.map((tag) => {
                            return (
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                    #{tag}
                                </span>
                            );
                        })}
                    </div>
                </div>
            </Link>
        </>
    );
};

export default DiscoCard;
