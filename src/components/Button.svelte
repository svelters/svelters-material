<script>
    export let style = 'primary'
</script>

<button class={style}>
  <slot></slot>
</button>

<style>
  button.primary {
    background-color: var(--color-primary);
  }

  button.secondary {
    background-color: var(--color-secondary);
  }
</style>
