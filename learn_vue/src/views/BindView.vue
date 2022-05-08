<template>
<body>
    <div id="app">
        <h3>Practicing V-bind in this page</h3> 
        <div>
            <button @click="changeStyle">Change Style</button>
        </div>
        
        <br>
        <br>
        <div id="score-statement"> 
            <div id="statement"><strong>{{object_.name}}</strong> get a grade for math:</div>
            <div id="score" :class="color">{{object_.score}}</div>
        </div>
    </div>   
</body>
 
</template>

<script>
import {ref, reactive} from "vue";
export default({
    setup() {
        // remember to get value by "variabel.value" for {ref} 
       let object_ = reactive({
           id : 12345,
           name: "Domingo Tsao",
           score: 90,
       })
       let color = ref("red");
       function changeStyle(){
           if (color.value =="red"){
               color.value = "blue"
           }else{
               color.value = "red"
           }
           
       }
       return{
           object_, color, changeStyle
       }
    },
})
</script>

<style scoped>
.red{
    color:red
}
.blue{
    color:blue;
}

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
}
</style>
