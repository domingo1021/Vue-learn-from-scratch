<template>
    <body>
    <div>
        <input type="text" placeholder="輸入科目" v-model="subject"><input type="text" placeholder="輸入成績" v-model="score">
        <button @click="submit" class="submit">送出</button>
    </div>
    <br>
    <ul>
        <li v-for= "(item) in subject_score" :key= "item.subject">
            <div class="v-index">
                {{item.subject}}: {{item.score}}
            </div>
        </li>
    </ul>
    </body>
</template>

<script>
import { reactive, ref } from "@vue/reactivity"

export default({
    setup() {
        let subject= ref("");
        let score = ref("");
        let subject_score=reactive([
            {subject:"Chinese", score:100},
            {subject:"Math", score:90},
            {subject:"English", score:80},
        ]);
        function submit(){
            subject_score.push({
                subject: subject.value,
                score: Number(score.value),
            })
            subject.value = "";
            score.value="";
        }
        return{
            subject, score, subject_score, submit
        }
    },
})
</script>

<style scoped>
body{
    padding-top: 20px;
    padding-left: 30px;
}
.v-index{
    display: inline;
    margin-right:10px;
}
input{
    border-radius: 3px;
    width: 120px;
    margin-right: 5px;
}
.submit{
    border-radius: 5px;
    background-color: rgb(203, 240, 255);
}
.submit:active{
    background-color: rgb(58, 99, 116);
}
</style>
