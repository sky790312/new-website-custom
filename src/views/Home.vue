<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld
      :message="parentMessage"
      @changeMessage="handleChangeMessage">
    </HelloWorld>
    <button 
      @click="componentMethod">
      component method
    </button>
    <button 
      @click="mixinMethod">
      mixin method
    </button>
    <p>
      component data: {{ componentData }}
    </p>
    <p>
      computed data: {{ computedData }}
    </p>
    <p>
      mixins data: {{ mixinData }}
    </p>
    <p>
      vuex store data: {{ storeMessage }}
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Provide, Watch, Mixins } from 'vue-property-decorator';
import {
  Getter,
  Action,
} from 'vuex-class';
import testMixin from '@/mixins/mixin'; // @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { userInfo } from 'os';

@Component({
  components: {
    HelloWorld,
  },
  mixins: [
    testMixin,
  ],
})
export default class Home extends Vue {
  @Getter('storeMessage') public storeMessage: any;
  @Action('setStoreMessage') public setStoreMessage: any;
  @Provide() public parentMessage: string = 'message from parent to child';
  @Provide() public componentData: number = 0;

  get computedData(): string {
    return `computed ${this.componentData}`;
  }

  @Watch('componentData', {immediate: true})
  public watchComponentData(val: string, oldVal: string) {
    console.log('watch val: ', val);
    console.log('watch oldVal: ', oldVal);
  }

  public mounted() {
    console.log(`mounted`);
  }

  public componentMethod(): void {
    this.componentData += 1;
    this.setStoreMessage('use action change store');
  }

  public handleChangeMessage(): void {
    this.parentMessage = 'message from parent emit';
  }
}
</script>
