import {Vue, Component} from 'vue-property-decorator'
// @ts-ignore
import RightTipDisplay from '@/components/RightTipDisplay/RightTipDisplay.vue'
// @ts-ignore
import MnemonicVerification from '@/components/MnemonicVerification/MnemonicVerification.vue'
// @ts-ignore
import ButtonStep from '@/components/ButtonStep/ButtonStep.vue'

@Component({
  components: {
    RightTipDisplay,
    MnemonicVerification,
    ButtonStep,
  },
})
export default class VerifyMnemonicTs extends Vue {
  tipContents: string[] = [
    '助记词如果备份错误，将可能不能找回，请认真核对单词和顺序.',
  ]

  mnemonicWords: string[] = [
    'hello',
    'world',
    'fd',
    'test',
  ]
}
