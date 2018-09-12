<template>
  <div>
    <input :class="input" style="iStyle" />
    <button :v-if="showButton" class="button" >
      <!-- {{buttonText}} -->
      {{buttonText}}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props:{
    type:"",
    buttonText:"",
    iStyle:Object
  },
  data () {
    return {
      showButton: this.type==="searchInput",
      input: this.type==="searchInput"?"searchInput":"normalInput",
    }
  }
}
</script>

<style lang="scss">
.normalInput {
    height: 30px;
    width: 400px;
    font-size: 17px;
    padding-left: 8px;
    border-radius: 5px;
    box-shadow: none;
    border-top-width: 2px;
    border: 1px rgb(200, 200, 200) solid;
    outline: none;
    &:hover,
    &:focus {
        border: 1px rgb(51, 133, 255) solid;
    }
}
.searchInput {
    height: 30px;
    width: 400px;
    font-size: 17px;
    padding-left: 8px;
    border-radius: 5px 0px 0px 5px;
    box-shadow: none;
    border-top-width: 2px;
    border: 1px rgb(200, 200, 200) solid;
    outline: none;
    &:hover,
    &:focus {
        border: 1px rgb(51, 133, 255) solid;
    }
}
.button {
    height: 34px;
}
</style>
