import { useState, useCallback } from "react";
import { ref, onValue, off, DataSnapshot } from "firebase/database";
import { database } from "../firebase";
import { ParkingData } from "../type";

const useFirebaseSubscription = (path: string) => {
  const [data, setData] = useState<ParkingData | null>(null);
  const [loading, setLoading] = useState(true);

  const subscribe = useCallback(() => {
    const dbRef = ref(database, path);

    const onDataChange = (snapshot: DataSnapshot) => {
      const newData = snapshot.val();
      setData(newData);
      setLoading(false);
    };

    onValue(dbRef, onDataChange, (error) => {
      console.error("Error fetching data:", error);
      setLoading(false);
    });

    return () => {
      off(dbRef, "value", onDataChange);
    };
  }, [path]);

  return { data, loading, subscribe };
};

export default useFirebaseSubscription;
