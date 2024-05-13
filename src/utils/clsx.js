export default function clsx(...classNames) {
  const classList = [...classNames].filter((item) => item);

  return classList.join(' ');
}
