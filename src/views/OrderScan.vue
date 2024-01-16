<script setup>
    import ViewTitle from '@/components/ViewTitle'
    import Edit from "@/components/Edit";
    import Grid from "@/components/Grid";
    import {reactive, ref} from 'vue';

    const titles = [
        {column: 'item'     ,text: 'Item'      ,type: 'code'},
        {column: 'itemName' ,text: 'Item Name' ,type: 'string' ,width: '150px'},
        {column: 'qty'      ,text: 'Qty'       ,type: 'number'},
        {column: 'scan'     ,text: 'Scan'      ,type: 'number'},
        {column: 'stat'     ,text: 'Status'    ,type: 'code'},
    ];

    const shipTo = ref('');
    let data = reactive([]);

    setTimeout(() => {
      shipTo.value = 'test';
      data = [
        {item:'1' ,itemName:'d' ,stat: 'Complete'}
      ];
    },1000);
</script>

<template>
    <div class="menu-container">

        <ViewTitle title="OrderScan"/>

        <div>
          <Edit text="Order No."/>
          <Edit text="Ship to" v-model="shipTo" readonly/>
        </div>

        <div class="division"></div>

        <Grid :titles="titles" v-model:data="data" height="calc(100% - 195px)"/>

        <div class="footer">
          <button class="primary">Scan</button>
          <button type="button" class="reset" @click="init">
            Cancel
          </button>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: space-around;
  align-items: center;

  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  padding: 0px 15px;

  gap: 10px;

  button {
    flex: 1;
    height: 70%;
  }
}
</style>
