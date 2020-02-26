<template>
  <div class="import-page-wrapper">
    <div class="step-box-container">
      <StepBar :step-list="stepList" :current-step="parseInt($route.meta.extension, 10)" />
    </div>
    <div class="page-detail-container">
      <div v-if="$route.meta.title.length !== 0" class="page-content-title">
        {{ $t($route.meta.title) }}
      </div>
      <router-view />
    </div>
    <div class="button-container">
      <ButtonStep @click="$router.go(-1)">
        {{ $t('Previous_step') }}
      </ButtonStep>
      <ButtonStep :primary="true" @click="$router.push({name: $route.meta.nextPage})">
        {{ $t('Next_step') }}
      </ButtonStep>
    </div>
  </div>
</template>

<script lang="ts">
import ImportPageTs from './ImportPageTs'
import './ImportPage.less'
export default class ImportPage extends ImportPageTs {}
</script>

