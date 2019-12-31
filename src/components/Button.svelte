<script>
  import { getContext } from 'svelte'
  import themeContext from '../themeContext'

  const { primaryColor } = getContext(themeContext)
</script>

<button>
  <slot></slot>
</button>

<style>
  button {
    background-color: ${primaryColor};
  }
</style>
