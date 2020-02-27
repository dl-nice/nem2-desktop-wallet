import {Vue, Component} from 'vue-property-decorator'
// @ts-ignore
import RightTipDisplay from '@/components/RightTipDisplay/RightTipDisplay.vue'
// @ts-ignore
import ImportMnemonic from '@/components/ImportMnemonic/ImportMnemonic.vue'

@Component({
  components: {
    RightTipDisplay,
    ImportMnemonic,
  },
})
export default class ImportMnemonicTs extends Vue {
  tipContents: string[] = [
    'import_mnemonic_tips_comtent_one',
    'import_mnemonic_tips_comtent_two',
  ]

  mnemonicContent: string[]
  mnemonicType: string

  updateMnemonic(data) {
    this.mnemonicContent = data.content
    this.mnemonicType = data.type
  }

  submit() {
    // const seed = this.mnemonicContent.join(' ')
    const seed = 'label unique coffee west cram tomato certain stadium torch guide few wide south boost shift loan result oyster junk near jaguar slim polar disease'
    // update state
    this.$store.dispatch('temporary/SET_MNEMONIC', seed)
    this.$store.dispatch('notification/ADD_SUCCESS', this.$t('Generate_entropy_increase_success'))

    // redirect
    return this.$router.push({name: 'accounts.import.accountInfo'})
  }
}
