import styles from './Question.module.css';

export const Question = (props) => {
  const { description, questionImg } = props;

  return (
    <figure>
      <img src={questionImg} alt="flag" className={styles.img} />
      <figcaption>
        <p className={styles.description}>{description}</p>
      </figcaption>
    </figure>
  );
};
