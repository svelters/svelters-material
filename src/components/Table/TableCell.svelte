<script>
  import { getContext } from 'svelte'
  import { HEAD, SIZE } from './context'

  export let align = 'left'

  let head = getContext(HEAD)
  let size = getContext(SIZE)
</script>

<th
  class:alignLeft={align === 'left'}
  class:alignCenter={align === 'center'}
  class:alignRight={align === 'right'}
  class:head
  class:dense={size === 'small'}
  scope="col"
>
  <slot></slot>
</th>

<style>
  th {
    display: table-cell;
    padding: 16px;
    font-size: 0.875rem;
    text-align: left;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.43;
    border-bottom: 1px solid rgba(224, 224, 224, 1);
    letter-spacing: 0.01071em;
    vertical-align: inherit;
  }

  .head {
    color: rgba(0, 0, 0, 0.87);
    font-weight: 500;
    line-height: 1.5rem;
  }

  .dense {
    padding: 6px 24px 6px 16px;
  }

  .alignLeft {
    text-align: left;
  }

  .alignCenter {
    text-align: center;
  }

  .alignRight {
    text-align: right;
    flex-direction: row-reverse;
  }
</style>
