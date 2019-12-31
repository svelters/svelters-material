<script>
  import { createEventDispatcher } from 'svelte'
  import SveltersMaterial from '../src/components/SveltersMaterial.svelte'

  export let text = ''

  const dispatch = createEventDispatcher()

  function onClick(event) {
    dispatch('click', event)
  }
</script>

<SveltersMaterial>
  <button
    class="button"
    on:click={onClick}
  >
    {text}
  </button>
</SveltersMaterial>

<style>
  .button {
    border: 1px solid #eee;
    border-radius: 3px;
    background-color: var(--primary-color);
    cursor: pointer;
    font-size: 15px;
    padding: 3px 10px;
    margin: 10px;
  }
</style>

