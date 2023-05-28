import styles from "./projectImage.module.scss";
export default function ProjectImage({
  imageUrl,
  link,
}: {
  imageUrl?: string;
  link?: string;
}) {
  return (
    <a href={link} className={styles.projectImage} target="_blank">
      <img src={imageUrl} alt="Tic-tac-toe image" />
    </a>
  );
}
