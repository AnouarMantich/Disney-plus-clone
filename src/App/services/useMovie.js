import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { documentId } from "firebase/firestore";
import db from "../../firebase";

export function useMovie(id) {
  const [detailData, setDetailData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const q = query(collection(db, "movies"), where(documentId(), "in", [id]));

    getDocs(q)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          setDetailData(doc.data());
        });
      })

      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return { detailData, isLoading };
}
