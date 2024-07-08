import { useEffect, useState } from "react";
import { getId } from "../repo";
import { IdType } from "../repo/id.type";
import { useParams } from "react-router-dom";

export const useId = () => {
    const [isLoading, setIsLoanding] = useState<boolean>(true);
    const [disco, setDisco] = useState<IdType | null>();
    const {id} = useParams();
    
    let idNum = -1;
    
    if(id){
        idNum = parseInt(id);
    }

    useEffect(() => {
        getId(idNum).then((disco) => {
            setDisco(disco);
            setIsLoanding(false);
        });
    }, [idNum]);

    return { disco, isLoading };
};
