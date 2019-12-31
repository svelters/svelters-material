<script>
  import { setContext } from 'svelte'
  import { HEAD } from './context'

  setContext(HEAD, false)
</script>

<tbody>
  <slot></slot>
</tbody>

<style>
  tbody {
    display: table-row-group;
  }
</style>
