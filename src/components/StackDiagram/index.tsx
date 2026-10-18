import type {ReactNode} from 'react';
import styles from './styles.module.css';

type Props = {
  /** Items from the bottom of the stack to the top. */
  items: (string | number)[];
  /** Text written next to the top item. */
  topLabel?: string;
};

/** A vertical pile of boxes with the top item marked, used to picture a stack. */
export default function StackDiagram({items, topLabel = 'top'}: Props): ReactNode {
  const fromTop = [...items].reverse();
  return (
    <figure
      className={styles.figure}
      role="img"
      aria-label={`stack, from top to bottom: ${fromTop.join(', ')}`}>
      <div className={styles.pile}>
        {fromTop.map((item, i) => (
          <div key={`item-${i}`} className={styles.row}>
            <span className={styles.box}>{item}</span>
            <span className={styles.mark}>{i === 0 ? `← ${topLabel}` : ''}</span>
          </div>
        ))}
      </div>
    </figure>
  );
}
