<template>
  <form class="mt-5" v-on:keyup.enter="addComment" @submit.prevent="addComment">
    <div class="form-group" :class="{ 'form-group__error': $v.name.$error }">
      <b-form-input v-model.trim="$v.name.$model" placeholder="Введите имя"></b-form-input>
    </div>
    <div class="error" v-if="$v.name.$dirty && !$v.name.required">Field is required</div>
    <div class="error" v-if="!$v.name.minLength">Name must have at least {{ $v.name.$params.minLength.min }} letters.
    </div>
    <div class="form-group mt-3" :class="{ 'form-group__error': $v.name.$error }">
      <b-form-textarea
          id="textarea"
          v-model.trim="$v.message.$model"
          placeholder="Сообщение"
      ></b-form-textarea>
    </div>
    <div class="error" v-if="$v.message.$dirty && !$v.message.required">Field is required</div>
    <div class="error" v-if="!$v.message.minLength">Name must have at least {{ $v.message.$params.minLength.min }}
      letters.
    </div>
    <div class="form-button d-flex justify-content-center mt-4">
      <button type="submit">Написати консультанту</button>
    </div>
  </form>
</template>
<script>
import {required, minLength} from 'vuelidate/lib/validators'

export default {
  name: "CommentsForm",
  data() {
    return {
      name: '',
      message: ''
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(2)
    },
    message: {
      required,
      minLength: minLength(2)
    }
  },
  methods: {
    addComment() {
        this.$v.$touch()
        if (this.$v.$invalid) {
          this.disabledBtn = false;
        } else {
          this.disabledBtn = false;
          let comment = {
            name: this.name,
            form_date: Date.now(),
            message: this.message
          }
          this.$emit('addComment', comment);
          this.name = this.message = '';
          this.$v.$reset();
        }
      }
  }
}
</script>

<style lang="scss" scoped>
form {
  .form-control {
    border: 1px solid #212121;
  }

  .form-control:focus {
    box-shadow: 0 0 0 0.25rem transparent;
  }

  .form-group {
    &__error {
      border: 1px solid #ed0707;
      border-radius: 0.25rem;
    }
  }

  .error {
    font-size: 12px;
    color: #ff0000;
  }

  .form-button {
    button {
      width: 281px;
      height: 43px;
      border: transparent;
      background: #FDD639;
      border-radius: 23px;
    }
  }
}
</style>