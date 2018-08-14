import { Vue, Component, Provide } from 'vue-property-decorator'

@Component
export default class testMixin extends Vue {
  @Provide() mixinData: number = 0

  mixinMethod(): void {
    this.mixinData += 1
  }
}