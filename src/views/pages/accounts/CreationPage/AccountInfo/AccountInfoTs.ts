// @ts-ignore
import RightTipDisplay from '@/components/RightTipDisplay/RightTipDisplay.vue'
// @ts-ignore
import FormAccountSetting from '@/views/forms/FormAccountSetting/FormAccountSetting.vue'
import { Component, Vue } from 'vue-property-decorator'
// @ts-ignore
import ButtonStep from '@/components/ButtonStep/ButtonStep.vue'

@Component({
  components: {
    RightTipDisplay,
    FormAccountSetting,
    ButtonStep,
  },
})
export default class AccountInfoTs extends Vue {
  tipContents: string[] = [
    '设置密码用于加密当前助记词，此密码的复杂性影响助记词的安全',
    '同时，本密码将不会在任何地方存储，不可找回，请务必妥善设置和保管',
  ]
}
