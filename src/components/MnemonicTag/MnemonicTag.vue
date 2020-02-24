<template>
  <div class="mnemonic-tag-wrapper">
    <draggable
      ghost-class="ghost" :diabled="isDraggable"
      @end="drag = false"
    >
      <span>
        <Tag
          :closable="closable" class="tag-box" :class="{'active-tag': isActive}"
          @on-close="$emit('on-close')"
          @on-change="$emit('on-change')"
          @click.native="$emit('click')"
        >
          {{ tagName }}
        </Tag>
      </span>
    </draggable>
  </div>  
</template>

<script lang="ts">
import { MnemonicTagTs } from './MnemonicTagTs'
import './MnemonicTag.less'
export default class MnemonicTag extends MnemonicTagTs{}
</script>>
