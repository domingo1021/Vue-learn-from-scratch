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
                <button id="remove-subject" @click="removeSubject(item)">X</button>
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
        let subject_score=ref([
            {subject:"Chinese", score:100},
            {subject:"Math", score:90},
            {subject:"English", score:80},
        ]);
        function submit(){
            subject_score.value.push({
                subject: subject.value,
                score: Number(score.value),
            })
            subject.value = "";
            score.value="";
        }
        function removeSubject(input){
            subject_score.value = subject_score.value.filter((key)=> key.subject !== input.subject);
        }
        return{
            subject, score, subject_score, submit, removeSubject
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
.submit:hover{
    background-color: rgb(80, 187, 233);
}
#remove-subject{
    margin-left: 5px;
    font-size: 3px;
    border-radius: 5px;
    background-color: rgb(255, 215, 219);
}
#remove-subject:hover{
    background-color: rgb(243, 111, 111);
}
</style>
