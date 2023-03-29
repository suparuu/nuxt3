<template lang="">
    <h2>About</h2>

    <p>{{count}}</p>
    <button @click="incre">증가</button>
    <div> getDB => {{resData}} </div>
    <button @click='add'> 데이터 DB에 추가</button>
    
</template>


<script setup>  
    const aa = useState('g',()=>'about 내용쪽 데이터 ');
    const { data : resData } = await useFetch('api/db', {body:'{id:1000}', method:'POST'});
</script>

<script> 
export default {
    data(){
        return{
            count:0
        }
    },
    methods:{
        
        incre(){
            console.log('hi')
            this.count++;
        },
        async add(){
            const data = {name:'홍길동이에염', content:'뷰쀼쀼쀼ㅃ', date:'2023-03-29'}
            await useFetch('api/db', {body: data , method:'POST'});
        }
    }
    
}
</script>

<style lang="">
    
</style>