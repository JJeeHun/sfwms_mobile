<script setup>
import { reactive } from "vue";
import ViewTitle from "@/components/ViewTitle";
import Edit from "@/components/Edit";
import Number from "@/components/Number";
import Select from "@/components/Select";

const width = "75px";

const submit = (e) => {
    e.preventDefault();
    init();
};

const initData = {
    pltId: "",
    item: "1",
    location: "",
    locationLength: "1 data",
    stock: 39391,
    psbl: 23423,
    uom: "EA",
    qty: 0,
};

const items = [
    {id: 1, text:'1번 콤보'},
    {id: 2, text:'2번 콤보'},
    {id: 3, text:'3번 콤보'},
    {id: 4, text:'4번 콤보'},
    {id: 5, text:'5번 콤보'},
    {id: 6, text:'6번 콤보'},
]

const form = reactive({ ...initData });

const init = () =>
    Object.keys(form).forEach((key) => (form[key] = initData[key]));

</script>

<template>
    <div class="menu-container">
        <ViewTitle title="Move Location" />
        <form action="" @submit="submit">
            <Edit
                :width="width"
                text="Pallet ID"
                required
                v-model="form.pltId"
            />
            <Edit :width="width" text="Item" v-model="form.item" />
            <div class="select-col-2">
                <Select :width="width" v-model="form.item" :items="items"/>
                <Edit :width="`0px`" v-model="form.locationLength" readonly/>
            </div>
            <Edit
                :width="width"
                v-model="form.location"
                required
                placeholder="new Location"
            />
            <div class="col-2">
                <Number :width="width" text="STOCK" v-model="form.stock" />
                <Number :width="width" text="PSBL" v-model="form.psbl" readonly/>
            </div>
            <div class="col-2">
                <Edit :width="width" text="UOM" v-model="form.uom" readonly/>
                <Number id="test" :width="width" :step="10" v-model="form.qty" readonly/>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>
.col-2 {
    display: flex;
}

.col-2 * {
    flex: 1;
}

.select-col-2 {
    display: flex;

    * {
        flex: 1;
    }

    :first-child {
        flex: 3;
        flex-shrink: 0;
    }
}
</style>
