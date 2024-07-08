import { DiscoType } from "./disco.type";
import { IdType } from "./id.type";
import dayjs from "dayjs";

const URL = "https://its-events.davide-mantovani.workers.dev/events/";

export const getDisco = async (): Promise<DiscoType[]> => {
    const res: Response = await fetch(URL);
    if (res.status === 200) {
        const data = (await res.json()) as DiscoType[];
        data.map((oggetto) => { 
            oggetto.data = dayjs(oggetto.date).format('DD-MM-YYYY');
            oggetto.ora = dayjs(oggetto.date).format('HH:mm');
            return oggetto;
        })
        return data;
    }
    return [];
};

export const getId = async (id:number): Promise<IdType | null > => {
    const res: Response = await fetch(URL+id);
    if (res.status === 200) {
        const data = (await res.json()) as IdType;
        data.data = dayjs(data.date).format("DD-MM-YYYY");
        
        const appOra = [];
        
        appOra.push(dayjs(data.date).format("HH:mm").toString());

        let conta = 15;

        for(let i = 1; i<6; i++){ 
            
            appOra.push(dayjs(data.date).add(conta, 'm').format("HH:mm").toString());

            conta += 15;
        }

        data.ora = appOra;
    
        return data;
    }
    return null;
};