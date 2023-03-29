<template lang="">
    <h2>work</h2>
    {{resDataSuccess}}
</template>

<script setup>
const aa = useState('g')
const { data : resDataSuccess } = await useFetch('/api')

</script>

<script>
import {mapState, mapActions} from 'vuex';
export default {
    data(){
        return{ }
    },
    computed:{
        ...mapState(['data'])
    },
    methods:{
        ...mapActions(['getData'])
    },
    created(){
        // this.getData()
    }

}
</script>

<style lang="">
    
</style>