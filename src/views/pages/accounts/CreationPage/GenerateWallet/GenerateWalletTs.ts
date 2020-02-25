import {Vue, Component} from 'vue-property-decorator'
// @ts-ignore
import SelectAccountTable from '@/components/SelectAccountTable/SelectAccountTable.vue'
// @ts-ignore
import TableTitle from '@/components/TableTitle/TableTitle.vue'
// @ts-ignore
import ButtonStep from '@/components/ButtonStep/ButtonStep.vue'
import { NetworkType } from 'nem2-sdk'

/// region custom types
type NetworkNodeEntry = {value: NetworkType, label: string}

@Component({
  components: {SelectAccountTable,TableTitle,ButtonStep},
})
export default class GenerateWalletTs extends Vue {
  /**
   * Network types
   * @var {NetworkNodeEntry[]}
   */
  public networkTypeList: NetworkNodeEntry[] = [
    {value: NetworkType.MIJIN_TEST, label: 'MIJIN_TEST'},
    {value: NetworkType.MAIN_NET, label: 'MAIN_NET'},
    {value: NetworkType.TEST_NET, label: 'TEST_NET'},
    {value: NetworkType.MIJIN, label: 'MIJIN'},
  ]
}
