import { useState, useEffect } from "react";
import { Stain } from "../types/Stain";
import { getStainsFromApi } from "../services/stain.ts";

export default function useStains() {
    const [stains, setStains] = useState<Stain[]>([]);
    //   const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        getStainsFromApi().then((response) => {
            setStains(response);
        });
    }, []);

    return { stains, setStains };
}