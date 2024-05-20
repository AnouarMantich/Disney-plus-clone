import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../features/user/userSlice";
import { useEffect, useState } from "react";
import { query } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { setMovies } from "../../features/movie/movieSlice";
import db from "../../firebase";

export function useMovies() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let recommends = [];
    let newDisney = [];
    let originals = [];
    let trending = [];
    setIsLoading(true);
    const q = query(collection(db, "movies"));

    getDocs(q)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots

          switch (doc.data().type) {
            case "recommend":
              recommends = [...recommends, { id: doc.id, ...doc.data() }];
              break;
            case "new":
              newDisney = [...newDisney, { id: doc.id, ...doc.data() }];

              break;
            case "original":
              originals = [...originals, { id: doc.id, ...doc.data() }];

              break;
            case "trending":
              trending = [...trending, { id: doc.id, ...doc.data() }];

              break;
            default:
              console.log("type does not match any category !");
          }
        });
        dispatch(
          setMovies({
            recommend: recommends,
            newDisney: newDisney,
            original: originals,
            trending: trending,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [userName, dispatch]);

  return { isLoading };
}
