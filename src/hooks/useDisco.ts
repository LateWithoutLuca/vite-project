import { useEffect, useState } from "react";
import { DiscoType } from "../repo/disco.type";
import { getDisco } from "../repo";

export const useDisco = () => {
    const [isLoading, setIsLoanding] = useState<boolean>(true);
    const [discos, setDisco] = useState<DiscoType[]>([]);
    useEffect(() => {
        getDisco().then((discos) => {
            setDisco(discos);
            
            setIsLoanding(false);
        });
    }, []);

    
    return { discos, isLoading };
};
