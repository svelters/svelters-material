<script>
  export let checked = false
  export let onChange = () => {}
  export let value = null
  export let color = 'secondary'
  export let inputProps = {}
</script>

<div class="wrapper">
    <input type="checkbox" on:click={() => onChange(checked, value)} bind:checked />
</div>

<style>
  .wrapper {
    box-sizing:content-box;
    color:rgba(0, 0, 0, 0.87);
    cursor:pointer;
    display:block;
    flex-basis:18px;
    flex-grow:0;
    flex-shrink:0;
    font-family:Roboto, sans-serif;
    font-size:14px;
    font-weight:400;
    height:18px;
    letter-spacing:0.25px;
    line-height:0px;
    padding-bottom:11px;
    padding-left:11px;
    padding-right:11px;
    padding-top:11px;
    position:relative;
    text-transform:none;
    vertical-align:bottom;
    visibility:visible;
    white-space:nowrap;
    width:18px;
    will-change:transform, opacity;
    -webkit-font-smoothing:antialiased;
    -webkit-tap-highlight-color:rgba(0, 0, 0, 0);
  }

  input[type="checkbox"] {
    background-color:rgba(0, 0, 0, 0);
    border-bottom-color:rgb(0, 0, 0);
    border-bottom-style:none;
    border-bottom-width:0px;
    border-image-outset:0px;
    border-image-repeat:stretch;
    border-image-slice:100%;
    border-image-source:none;
    border-image-width:1;
    border-left-color:rgb(0, 0, 0);
    border-left-style:none;
    border-left-width:0px;
    border-right-color:rgb(0, 0, 0);
    border-right-style:none;
    border-right-width:0px;
    border-top-color:rgb(0, 0, 0);
    border-top-style:none;
    border-top-width:0px;
    box-sizing:border-box;
    color:rgb(0, 0, 0);
    cursor:pointer;
    display:block;
    font-family:Arial;
    font-size:13.3333px;
    font-stretch:100%;
    font-style:normal;
    font-variant-caps:normal;
    font-variant-east-asian:normal;
    font-variant-ligatures:normal;
    font-variant-numeric:normal;
    font-weight:400;
    height:40px;
    left:0px;
    letter-spacing:normal;
    line-height:normal;
    margin-bottom:0px;
    margin-left:0px;
    margin-right:0px;
    margin-top:0px;
    opacity:0;
    padding-bottom:0px;
    padding-left:0px;
    padding-right:0px;
    padding-top:0px;
    position:absolute;
    right:0px;
    text-align:start;
    text-indent:0px;
    text-rendering:auto;
    text-shadow:none;
    text-transform:none;
    top:0px;
    visibility:visible;
    white-space:nowrap;
    width:40px;
    word-spacing:0px;
    writing-mode:horizontal-tb;
    -webkit-appearance:checkbox;
    -webkit-font-smoothing:antialiased;
    -webkit-rtl-ordering:logical;
    -webkit-tap-highlight-color:rgba(0, 0, 0, 0);
    -webkit-border-image:none;
  }
</style>
