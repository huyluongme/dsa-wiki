import type {ReactNode} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type Props = {
  /** Values shown in the boxes. Use null for an empty box. */
  items: (string | number | null)[];
  /** Name written to the left of the boxes, for example "scores". */
  name?: string;
  /** Text written to the left of the index numbers. */
  indexLabel?: string;
  /** Indexes of boxes to highlight. */
  highlight?: number[];
};

/** A row of boxes with an index under each box, used to picture an array. */
export default function ArrayDiagram({
  items,
  name,
  indexLabel = 'index',
  highlight = [],
}: Props): ReactNode {
  const summary = items.map((item) => item ?? 'empty').join(', ');
  return (
    <figure
      className={styles.figure}
      role="img"
      aria-label={`${name ?? 'array'}: ${summary}`}>
      <div
        className={styles.grid}
        style={{gridTemplateColumns: `auto repeat(${items.length}, 3.5rem)`}}>
        <span className={styles.label}>{name}</span>
        {items.map((item, i) => (
          <span
            key={`box-${i}`}
            className={clsx(
              styles.box,
              item === null && styles.empty,
              highlight.includes(i) && styles.highlight,
            )}>
            {item}
          </span>
        ))}
        <span className={styles.label}>{indexLabel}</span>
        {items.map((_, i) => (
          <span key={`index-${i}`} className={styles.index}>
            {i}
          </span>
        ))}
      </div>
    </figure>
  );
}
