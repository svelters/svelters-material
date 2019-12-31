<script>
  import { setContext } from 'svelte'
  import { SIZE } from './context'

  export let size = null

  setContext(SIZE, size)
</script>

<table>
  <slot></slot>
</table>

<style>
  table {
    width: 100%;
    display: table;
    border-spacing: 0;
    border-collapse: collapse;
  }
</style>
