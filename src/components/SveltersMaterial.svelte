<script>
  import { setContext } from 'svelte'
  import themeContext from '../themeContext'

  export let themeConfig = {}

  const config = {
    primaryColor: '#ff0000',
    ...themeConfig
  }

  setContext(themeContext, config)
</script>

<slot>
</slot>

<style global>
  :root {
    --primary-color: '#ff0000';
  }
</style>
