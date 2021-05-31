import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { useNaruto } from "../hooks/use-naruto";
import { useMemo } from "react";

export default function Home() {
  const { data, isLoading, isError, error } = useNaruto();

  const renderNarutinho = useMemo(() => {
    if (isLoading) return <p>loading</p>;

    if (isError) return <p>{error}</p>;

    return <div>{JSON.stringify(data)}</div>;
  }, [data, isLoading, isError]);

  return (
    <div className={styles.container}>
      <h1>heading</h1>
      {renderNarutinho}
    </div>
  );
}
