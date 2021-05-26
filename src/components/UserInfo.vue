<template>
  <div class="user-info-section mt-4">
    <img class="position-absolute" src="../assets/img/photo.png" alt="user photo"/>
    <div class="user-name">
      <h6>Вероника Ростова</h6>
      <small>Менеджер по продажам</small>
    </div>
    <div class="user-description mt-1">
      <p>Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны</p>
    </div>
    <div class="user-services">
      <h5 class="text-end">Услуг</h5>
      <hr>
      <div class="row hand_booking">
        <div class="col-8">
          <b-progress :max="max" height="2rem" class="mt-1">
            <b-progress-bar :value="hand_booking">
              <span class="text-lg-start position-absolute">Ручное бронирование</span>
            </b-progress-bar>
          </b-progress>
        </div>
        <div class="col-4 d-flex align-items-center justify-content-end">
          <p>11</p>
        </div>
      </div>
      <div class="row packages_tours">
        <div class="col-8">
          <b-progress :max="max" height="2rem" class="mt-1">
            <b-progress-bar :value="packages_tours">
              <span class="text-lg-start position-absolute">Пакетные туры</span>
            </b-progress-bar>
          </b-progress>
        </div>
        <div class="col-4 d-flex align-items-center justify-content-end">
          <p>3</p>
        </div>
      </div>
      <div class="row hotels">
        <div class="col-8">
          <b-progress :max="max" height="2rem" class="mt-1">
            <b-progress-bar :value="hotels">
              <span class="text-lg-start position-absolute">Отели</span>
            </b-progress-bar>
          </b-progress>
        </div>
        <div class="col-4 d-flex align-items-center justify-content-end">
          <p>1</p>
        </div>
      </div>
      <hr>
      <div class="total_summ d-flex justify-content-between">
        <p>Всего</p>
        <p>15</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "UserInfo",
  data() {
    return {
      hand_booking: 180,
      packages_tours: 20,
      hotels: 10
    }
  }
}
</script>

<style lang="scss" scoped>
.user-info-section {
  .user-name {
    position: relative;
    left: 130px;

    h6 {
      font-weight: 700;
    }

    small {
      font-size: 12px;
      font-weight: 400;
      color: #808080;
    }
  }

  .user-description {
    margin-left: 50px;
    padding: 10px 10px 10px 80px;
    background-color: #FFFBC8;
    border: 1px solid #DADADA;
    box-sizing: border-box;
    border-radius: 5px;
    z-index: -1;

    p {
      max-width: 333px;
      font-size: 14px;
      font-weight: 400;
    }
  }

  .user-services {
    margin: 20px 0 0 130px;

    p {
      font-weight: 600;
    }

    .progress {
      background-color: transparent;
      border-radius: 0;
    }

    .progress-bar {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      color: #333333;
      background-color: #ACE2F8;

      span {
        margin-left: 10px;
        font-size: 13px;
      }
    }

    .hand_booking {
      .progress-bar {
        background-color: #B1E19B;
      }
    }

    .total_summ {
      p {
        font-size: 16px;
      }
    }
  }
}

@media (max-width: 576px) {
  .user-info-section {
    .user-name {
      position: relative;
      left: 130px;

      h6 {
        font-weight: 700;
      }

      small {
        font-size: 12px;
        font-weight: 400;
        color: #808080;
      }
    }

    .user-description {
      padding: 5px 5px 5px 80px;
    }
  }

}

</style>