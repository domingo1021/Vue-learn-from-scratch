<template>
<body>
    <div id="app"> 
        <div>
            <button @click="increment">increment</button>
            <button @click="decrement">decrement</button>
        </div>
        
        <br>
        <br>
        <div> Ref variable: {{number}}</div>
        <div id="score-statement"> 
            <div id="statement"><strong>{{object_.name}}</strong> get a grade for math:</div>
            <div id="score">{{object_.score}}</div>
        </div>
    </div>   
</body>
 
</template>

<script>
import {ref, reactive} from "vue";
export default({
    setup() {
        // remember to get value by "variabel.value" for {ref} 
       let number = ref(0);
       let object_ = reactive({
           id : 12345,
           name: "Domingo Tsao",
           score: 90,
       })
       function increment(){
           number.value+=1;
           if (object_.score<100){
               object_.score+=1;
           }
       }       
       function decrement(){
           number.value-=1;
           if (object_.score>0){
               object_.score-=1;
           }
       }
       return{
           number, object_, increment, decrement
       }
    },
})
</script>

<style scoped>
body{
    padding-top: 20px;
    padding-left: 30px;
}

button{
    background-color: rgb(254, 227, 255);
    border-radius: 4px;
    margin-right: 5px;
}
button:active{
    background-color: rgb(125, 71, 150);
}

#score-statement{
    line-height: 30px;
    display: absolute;
    float: left;
}
#statement{
    float: left;
}

#score{
    float: left;
    margin-left: 5px;
    font-size: 30px;
    color: rgb(59, 58, 58);
}
</style>
