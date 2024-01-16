<script setup>
import {computed, defineProps} from "vue";

const props = defineProps({
  titles: Array,
  data:Array,
  height: String,
});

const isDataEmpty = computed(() => !props.data || props.data.length === 0);
const priceCommaRegExpr = new RegExp(/\B(?=(\d{3})+(?!\d))/, "g");
const changePriceNumber = (value) => {
  if(isNaN(value)) return 0;
  let [ intNumber ,decimalNumber ] = value.toString().split('.');
  intNumber = intNumber.replace(priceCommaRegExpr, ",");
  decimalNumber = (decimalNumber ? `.${decimalNumber}` : '');
  return intNumber + decimalNumber;
}

const getTypeCheckedText = (type,value) => {
  if (type === 'number') return changePriceNumber(value);
  return value;
}
</script>

<template>
  <div class="grid" :style="`flex-basis: ${props.height}`">
    <div class="grid-header">
      <div class="row">
        <div class="col title" v-for="title in props.titles" :key="title.column" :style="`${title.width ? 'flex-basis:' + title.width : ''}`">{{title.text}}</div>
      </div>
    </div>

    <div class="grid-data">
      <div class="no-data" v-if="isDataEmpty">{{`There is no data viewed.`}}</div>
      <div class="row" v-for="(item,i) in props.data" :key="i" v-else>
        <div :class="`col `+title.type" v-for="title in props.titles" :key="title.column" :style="`${title.width ? 'flex-basis:' + title.width : ''}`">{{getTypeCheckedText(title.type ,item[title.column])}}</div>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
  .grid {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--light-gray);
    width: 100%;
    border-radius: var(--defualt-borer-radius);
    overflow: hidden;

    .grid-data {
      overflow: auto;
      height: 100%;
      font-size: 0.9rem;
    }

    .row {
      display: flex;
      height: 25px;

      .title {
        font-size: 1.05rem;
        background-color: #0280f7;
        color: var(--white);
      }

      .col {
        flex-basis: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: 1px solid var(--light-gray);
        border-bottom: 1px solid var(--light-gray);
      }

      .string {
        justify-content: flex-start;
        padding-left: 5px;
      }
      .number {
        justify-content: flex-end;
        padding-right: 5px;
      }

      .col:last-child {
        border-right: none;
      }
    }
  }

  :first-child {
    .col {
      //padding-top: 4px;
    }
  }

  .no-data {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }


</style>
