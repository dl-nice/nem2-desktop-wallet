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
}
