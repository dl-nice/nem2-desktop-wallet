<template>
  <div class="import-page-wrapper">
    <div class="step-box-container">
      <StepBar :step-list="stepList" :current-step="parseInt($route.meta.extension, 10)" />
    </div>
    <div class="page-detail-container">
      <div v-if="$route.meta.title.length !== 0" class="page-content-title">
        {{ $route.meta.title }}
      </div>
      <router-view />
    </div>
    <div class="button-container">
      <ButtonStep @click="$router.go(-1)">
        上一步
      </ButtonStep>
      <ButtonStep :primary="true" @click="$router.push({name: $route.meta.nextPage})">
        下一步
      </ButtonStep>
    </div>
  </div>
</template>

<script lang="ts">
import ImportPageTs from './ImportPageTs'
import './ImportPage.less'
export default class ImportPage extends ImportPageTs {}
</script>

