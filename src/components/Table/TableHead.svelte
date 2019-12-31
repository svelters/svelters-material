<script>
  import { setContext } from 'svelte'
  import { HEAD } from './context'

  setContext(HEAD, true)
</script>

<thead>
  <slot></slot>
</thead>

<style>
  thead {
    display: table-header-group;
  }
</style>
