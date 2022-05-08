<template>
<body>
    <div id="first-edition">
        <h3>輸入成績, 組合 v-bind + v-on: input</h3> 
        <div>
            <input type="text" @input="changeScore" placeholder="歡迎輸入成績">
        </div>
        <br>
        <div id="score-statement"> 
            <div v-if="object_.valid_score">
                <div id="statement"><strong>{{object_.name}}</strong> get a grade for math:</div>
                <div id="score">{{object_.score}}</div>
                <br>
                <div>Valid score input </div>
                <br>
            </div>
            <div v-else>
                <p id="statement"></p>
                <div id="score">{{object_.score_msg}}</div>
                <br>
                <br>
                <br>
            </div>
            <div><strong style="font-size:20px">小記: </strong>v-bind + v-on function 反而比較好用, 可以在function控制條件</div>
        </div>
    </div>

    <div id="second-edition">
        <h3>輸入成績, 只用 v-model</h3> 
        <div>
            <input type="text" v-model="object_.score_2" placeholder="歡迎輸入成績">
        </div>
        
        <br>
        <br>
        <div id="score-statement"> 
            <div id="statement"><strong>{{object_.name}}</strong> get a grade for math:</div>
            <div id="score">{{object_.score_2}}</div>
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
           score: 99,
           score_2: null,
           valid_score: false,
           score_msg:null,
       })
       function changeScore(e){
           if (isNaN(e.target.value)){
               object_.valid_score=false;
               object_.score_msg = "Invalid syntax";
           }else if (0<=Number(e.target.value)&& Number(e.target.value)<=100){
               object_.valid_score=true;
               object_.score = Number(e.target.value);
               object_.score_msg = `${object_.score}`;
           }else{
               object_.valid_score=false;
               object_.score_msg = "Out of bound"
           }
       }
       return{
           object_, changeScore
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

#first-edition{
    /* margin-right:; */
    float:left;
}
#second-edition{
    float:left;
    margin-left:200px;
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
