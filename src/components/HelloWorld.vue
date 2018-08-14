<template>
  <div class="hello">
    <h1>in hello world component</h1>
    <h2>{{ message }}</h2>
    <button 
      @click="emitToParent">
      emit
    </button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop({ default: `default prop value` }) message!: string;

  @Emit('changeMessage')
  emitToParent(n: number) {
    console.log('emit from child to parent')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
