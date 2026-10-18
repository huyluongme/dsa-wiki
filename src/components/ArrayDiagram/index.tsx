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
  /** Short labels written under some boxes, keyed by index, for example {0: 'front'}. */
  marks?: Record<number, string>;
  /** Width of the label column. Use the same value in stacked diagrams to line them up. */
  labelWidth?: string;
  /** Hide the row of index numbers. */
  hideIndex?: boolean;
};

/** A row of boxes with an index under each box, used to picture an array. */
export default function ArrayDiagram({
  items,
  name,
  indexLabel = 'index',
  highlight = [],
  marks,
  labelWidth = 'auto',
  hideIndex = false,
}: Props): ReactNode {
  const summary = items.map((item) => item ?? 'empty').join(', ');
  return (
    <figure
      className={styles.figure}
      role="img"
      aria-label={`${name ?? 'array'}: ${summary}`}>
      <div
        className={styles.grid}
        style={{
          gridTemplateColumns: `${labelWidth} repeat(${items.length}, 3.5rem)`,
        }}>
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
        {!hideIndex && (
          <>
            <span className={styles.label}>{indexLabel}</span>
            {items.map((_, i) => (
              <span key={`index-${i}`} className={styles.index}>
                {i}
              </span>
            ))}
          </>
        )}
        {marks && (
          <>
            <span className={styles.label} />
            {items.map((_, i) => (
              <span key={`mark-${i}`} className={styles.mark}>
                {marks[i] ? `↑ ${marks[i]}` : ''}
              </span>
            ))}
          </>
        )}
      </div>
    </figure>
  );
}
