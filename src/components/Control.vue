<template>
    <div class="select-region ml-10">
       <label>Showing the latest searches in</label>
       <select @change="changeRegion">
           <option :value="index" v-for="(reg, index) in regions" :key="index">
               {{reg}}
           </option>
       </select>
       <select @change="changeGrid">
           <option value="15">15</option>
           <option value="8">8</option>
           <option value="4">4</option>
           <option value="2">2</option>
           <option value="1">1</option>
       </select>
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters({
            'regions': 'regions',
            'region': 'region',
            'gridCount': 'gridCount'
        })
    },
    methods: {
        ...mapActions({
            'setRegion': 'setRegion',
            'setGrid': 'setGrid'
        }),
        changeRegion(e) {
            this.setRegion(e.target.value);
        },
        changeGrid(e) {
            this.setGrid(e.target.value);
        }
    }
}
</script>