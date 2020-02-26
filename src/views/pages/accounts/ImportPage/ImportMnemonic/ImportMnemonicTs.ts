// @ts-ignore
import ButtonStep from '@/components/ButtonStep/ButtonStep.vue'
// @ts-ignore
import ImportMnemonic from '@/components/ImportMnemonic/ImportMnemonic.vue'
// @ts-ignore
import RightTipDisplay from '@/components/RightTipDisplay/RightTipDisplay.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    RightTipDisplay,
    ImportMnemonic,
    ButtonStep,
  },
})
export default class ImportMnemonicTs extends Vue {
  tipContents: string[] = [
    'import_mnemonic_tips_comtent_one',
    'import_mnemonic_tips_comtent_two',
  ]
}
