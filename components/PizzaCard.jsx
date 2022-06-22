/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = ({ pizza }) => {
  return (
    <Link href={`/product/${pizza._id}`}>
      <div className={styles.container}>
        <img src={pizza.img} alt="" />
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>${pizza.prices[0]}</span>
        <p className={styles.desc}>
          {pizza.desc}
        </p>
      </div>
    </Link>
  );
};

export default PizzaCard;
