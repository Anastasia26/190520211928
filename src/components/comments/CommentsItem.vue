<template>
  <div>
    <div class="user_name mt-4 d-flex align-items-center">
      <h6>{{comment.name}}</h6>
      <span class="date">{{comment.date}}</span>
      <span class="date" v-if="comment.form_date">{{new Date(comment.form_date) | dateFormat('DD MMMM YYYY', dateFormatConfig) }}</span>
    </div>
    <div class="triangle-left"></div>
    <div class="comment_text">
      <p>{{comment.message}}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "CommentItem",
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      dateFormatConfig: {
        monthNames: [
          'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
          'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
        ],
      }
    };
  }
}
</script>

<style lang="scss" scoped>
.user_name {
  h6 {
    font-weight: 700;
    padding-right: 15px;
  }
  .date {
    font-size: 14px;
    color: #7a7a7a;
  }
}

.comment_text {
  display: block;
  position: relative;
  background: #F2FBFF;
  padding: 15px;
  border: 1px solid #dddcdc;
  margin-top: 20px;
}

.comment_text:before, .comment_text:after {
  content: '';
  display: block;
  position: absolute;
  bottom: 100%;
  width: 0;
  height: 0;
}
.comment_text:before {
  left: 25px;
  border: 5px solid transparent;
  top: -19px;
  border-right-width: 14px;
  border-left-width: 0px;
  border-bottom: 14px solid #dddcdc;
}
.comment_text:after {
  left: 26px;
  border: 10px solid transparent;
  border-right-width: 12px;
  border-left-width: 0px;
  border-bottom: 12px solid  #F2FBFF;
}
</style>