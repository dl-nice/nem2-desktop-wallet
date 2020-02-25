// @ts-ignore
import ButtonStep from '@/components/ButtonStep/ButtonStep.vue'
// @ts-ignore
import SelectAccountTable from '@/components/SelectAccountTable/SelectAccountTable.vue'
// @ts-ignore
import TableTitle from '@/components/TableTitle/TableTitle.vue'
import { AccountsModel } from '@/core/database/entities/AccountsModel'
import { NetworkType } from 'nem2-sdk'
import { Component, Vue } from 'vue-property-decorator'
import { mapGetters } from 'vuex'

/// region custom types
type NetworkNodeEntry = {value: NetworkType, label: string}

@Component({
  components: {SelectAccountTable,TableTitle,ButtonStep},
  computed: {...mapGetters({
    currentMnemonic: 'temporary/mnemonic',
    currentAccount: 'temporary/account',
  }),
  },
})
export default class GenerateWalletTs extends Vue {

  /**
   * Currently active account
   * @see {Store.Account}
   * @var {string}
   */
  public currentAccount: AccountsModel
  
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
  walletList = [
    {
      address: 'TASFDE-NUJVJE-6XYMOH-J7UX6N-NVZSF5-AF2Y7C-FEQP',
      path: '0/0/../43/1/',
      assets: '1000.00xym',
      choices: false,
    },
    {
      address: 'TASFDE-NUJVJE-6XYMOH-J7UX6N-NVZSF5-AF2Y7C-FEQP',
      path: '0/0/../43/1/',
      assets: '1000.00xym',
      choices: false,
    },
    {
      address: 'TASFDE-NUJVJE-6XYMOH-J7UX6N-NVZSF5-AF2Y7C-FEQP',
      path: '0/0/../43/1/',
      assets: '1000.00xym',
      choices: false,
    },
    {
      address: 'TASFDE-NUJVJE-6XYMOH-J7UX6N-NVZSF5-AF2Y7C-FEQP',
      path: '0/0/../43/1/',
      assets: '1000.00xym',
      choices: false,
    },
    {
      address: 'TASFDE-NUJVJE-6XYMOH-J7UX6N-NVZSF5-AF2Y7C-FEQP',
      path: '0/0/../43/1/',
      assets: '1000.00xym',
      choices: false,
    },
    {
      address: 'TASFDE-NUJVJE-6XYMOH-J7UX6N-NVZSF5-AF2Y7C-FEQP',
      path: '0/0/../43/1/',
      assets: '1000.00xym',
      choices: false,
    },
    {
      address: 'TASFDE-NUJVJE-6XYMOH-J7UX6N-NVZSF5-AF2Y7C-FEQP',
      path: '0/0/../43/1/',
      assets: '1000.00xym',
      choices: false,
    },
    {
      address: 'TASFDE-NUJVJE-6XYMOH-J7UX6N-NVZSF5-AF2Y7C-FEQP',
      path: '0/0/../43/1/',
      assets: '1000.00xym',
      choices: false,
    },
  ]

  
}
