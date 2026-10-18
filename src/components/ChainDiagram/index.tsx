import type {ReactNode} from 'react';
import styles from './styles.module.css';

type Row = {
  /** Text in the first box of the row, for example a bucket number. */
  label: string | number;
  /** Items chained after the label, left to right. */
  items: (string | number)[];
};

type Props = {
  rows: Row[];
  /** Text shown for a row that has no items. */
  emptyText?: string;
};

/** Rows of "label, then a chain of items", used for hash buckets and adjacency lists. */
export default function ChainDiagram({rows, emptyText = 'empty'}: Props): ReactNode {
  const summary = rows
    .map((row) => `${row.label}: ${row.items.length ? row.items.join(', ') : emptyText}`)
    .join('; ');
  return (
    <figure className={styles.figure} role="img" aria-label={summary}>
      <div className={styles.rows}>
        {rows.map((row) => (
          <div key={`row-${row.label}`} className={styles.row}>
            <span className={styles.label}>{row.label}</span>
            {row.items.length === 0 && (
              <span className={styles.empty}>{emptyText}</span>
            )}
            {row.items.map((item, i) => (
              <span key={`item-${i}`} className={styles.link}>
                <span className={styles.arrow}>→</span>
                <span className={styles.box}>{item}</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </figure>
  );
}
