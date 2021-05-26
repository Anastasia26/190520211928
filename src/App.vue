<template>
  <div id="app">
    <div class="container">
      <UserInfo/>
      <CommentsList v-bind:commentsList="commentsList"/>
      <CommentsForm v-on:addComment="addCommentToList($event)"/>
    </div>
  </div>
</template>

<script>
import UserInfo from '././components/UserInfo'
import CommentsList from '././components/comments/CommentsList'
import CommentsForm from '././components/comments/CommentsForm'
export default {
  name: 'App',
  data() {
    return {
      commentsList: [
        {
          id: '1',
          name: 'Самуил',
          date: '13 октября 2011',
          message: 'Привет, Верунь! ниче себе ты крутая. фотка класс!!!!'
        },
        {
          id: '2',
          name: 'Лилия Семёновна',
          date: '14 октября 2011',
          message: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?'
        },
        {
          id: '3',
          name: 'Лилия Семёновна',
          date: '14 октября 2011',
          message: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?'
        },
      ]
    }
  },
  methods: {
    addCommentToList (comment) {
      this.commentsList.push(comment);
    }
  },
  components: {UserInfo, CommentsList, CommentsForm}
}
</script>

<style lang="scss">
#app {
  font-family: Arial, sans-serif;
  .container {
    max-width: 720px;
  }
}

</style>
