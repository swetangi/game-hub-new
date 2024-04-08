// import { useState } from "react";
// import apiClient from "../services/api-client";
// import { useEffect } from "react";
// import { CanceledError } from "axios";
import { GameQuery } from "../App";
import useData from "./useData";
// import { Genre } from "./useGenres";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}
export interface Game {
    id: number;
    name: string;
    background_image: string
    parent_platforms: { platform: Platform }[]
    metacritic: number;
    rating_top: number;
}

// export interface FetchGamesResponse {
//     count: number;
//     results: Game[];
// }

const useGames = (
    // selectedGenre: Genre | null, 
    // selectedPlatform: Platform | null
    gameQuery: GameQuery
) => useData<Game>('/games', {
    params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText
    },
}, [gameQuery])
// const useGames = () => {
//     const [games, setGames] = useState<Game[]>([]);
//     const [error, setError] = useState("");
//     const [isLoading, setLoading] = useState(false)
//     useEffect(() => {
//         const controller = new AbortController();
//         setLoading(true)
//         apiClient
//             .get<FetchGamesResponse>("/games", { signal: controller.signal })
//             .then((res) => {
//                 setGames(res.data.results)
//                 setLoading(false)
//             })
//             .catch((err) => {
//                 if (err instanceof CanceledError) {
//                     return
//                 }
//                 setError(err.message)
//                 setLoading(false)
//             });


//         return () => controller.abort()
//     }, []);

//     return { games, error, isLoading }
// }

export default useGames;



