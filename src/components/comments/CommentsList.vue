<template>
  <div class="mt-5">
    <div class="row last-comments">
      <div class="col-8 d-flex">
        <h6>Последние отзывы</h6>
        <a class="comments">Все отзывы</a>
      </div>
      <div class="col-4 d-flex justify-content-end">
        <div class="likes">
          <img class="d-inline" src="../../assets/img/like.png" alt="like"/>
          <span>131</span>
        </div>
        <div class="comments_summ">
          <img class="d-inline" src="../../assets/img/comment.png" alt="comment"/>
          <span>14</span>
        </div>
      </div>
    </div>
    <CommentItem v-for="comment of commentsList"
                 :comment="comment"
                 :key="comment.id"
    />

  </div>
</template>

<script>

import CommentItem from "./CommentsItem";

export default {
  name: "CommentsList",
  props: ['commentsList'],
  components: {CommentItem}
}
</script>

<style lang="scss" scoped>
.last-comments {
  a {
    margin-left: 10px;
    font-size: 14px;
    color: #005DA1;
    text-decoration: underline;
    cursor: pointer;
  }

  h6 {
    font-weight: 700;
  }

  img {
    width: 15px;
    margin-right: 7px;
  }

  .likes {
    margin-right: 25px;
  }
}
</style>