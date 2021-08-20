<template>
  <div class="overlay">
    <ul>
      <li>
        <div class="container">
          <div class="perkicon-box">
            <img
              :alt="lv1bgimg"
              :src="require(`@/assets/perks/perkbase/${lv1bgimg}.png`)"
              v-if="perk1img.status"
            />
            <img
              :alt="perk1img.en"
              :src="require(`@/assets/perks/survivors/${perk1img.id}.png`)"
              v-if="perk1img.status"
            />
          </div>
          <div class="perkname ja">{{ this.perk1img.ja }}</div>
          <div class="perkname en">{{ this.perk1img.en }}</div>
        </div>
      </li>

      <li>
        <div class="container">
          <div class="perkicon-box">
            <img
              :alt="lv2bgimg"
              :src="require(`@/assets/perks/perkbase/${lv2bgimg}.png`)"
              v-if="perk2img.status"
            />
            <img
              :alt="perk2img.en"
              :src="require(`@/assets/perks/survivors/${perk2img.id}.png`)"
              v-if="perk2img.status"
            />
          </div>
          <div class="perkname ja">{{ this.perk2img.ja }}</div>
          <div class="perkname en">{{ this.perk2img.en }}</div>
        </div>
      </li>

      <li>
        <div class="container">
          <div class="perkicon-box">
            <img
              :alt="lv3bgimg"
              :src="require(`@/assets/perks/perkbase/${lv3bgimg}.png`)"
              v-if="perk3img.status"
            />
            <img
              :alt="perk3img.en"
              :src="require(`@/assets/perks/survivors/${perk3img.id}.png`)"
              v-if="perk3img.status"
            />
          </div>
          <div class="perkname ja">{{ this.perk3img.ja }}</div>
          <div class="perkname en">{{ this.perk3img.en }}</div>
        </div>
      </li>

      <li>
        <div class="container">
          <div class="perkicon-box">
            <img
              :alt="lv4bgimg"
              :src="require(`@/assets/perks/perkbase/${lv4bgimg}.png`)"
              v-if="perk4img.status"
            />
            <img
              :alt="perk4img.en"
              :src="require(`@/assets/perks/survivors/${perk4img.id}.png`)"
              v-if="perk4img.status"
            />
          </div>
          <div class="perkname ja">{{ this.perk4img.ja }}</div>
          <div class="perkname en">{{ this.perk4img.en }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, onMounted, onUnmounted, ref } from "vue";
import perks_json from "../assets/perks/survivors/perks.json";

export default {
  setup() {
    const perks = perks_json;

    const lv1bgimg = computed(() => {
      const lv = perk1selectlv.value * 1;
      if (lv == 3) {
        return "very_rare";
      } else if (lv == 2) {
        return "rare";
      } else {
        return "uncommon";
      }
    });

    const perk1img = computed(() => {
      if (perk1selectpk.value != "") {
        const result = perks.find(perk => perk.ja === perk1selectpk.value);
        if (
          typeof result === "undefined" ||
          typeof result.status === "undefined"
        ) {
          return perks[0];
        }
        return result;
      } else {
        return perks[0];
      }
    });

    const lv2bgimg = computed(() => {
      const lv = perk2selectlv.value * 1;
      if (lv == 3) {
        return "very_rare";
      } else if (lv == 2) {
        return "rare";
      } else {
        return "uncommon";
      }
    });

    const perk2img = computed(() => {
      if (perk2selectpk.value != "") {
        const result = perks.find(perk => perk.ja === perk2selectpk.value);
        if (
          typeof result === "undefined" ||
          typeof result.status === "undefined"
        ) {
          return perks[0];
        }
        return result;
      } else {
        return perks[0];
      }
    });

    const lv3bgimg = computed(() => {
      const lv = perk3selectlv.value * 1;
      if (lv == 3) {
        return "very_rare";
      } else if (lv == 2) {
        return "rare";
      } else {
        return "uncommon";
      }
    });

    const perk3img = computed(() => {
      if (perk3selectpk.value != "") {
        const result = perks.find(perk => perk.ja === perk3selectpk.value);
        if (
          typeof result === "undefined" ||
          typeof result.status === "undefined"
        ) {
          return perks[0];
        }
        return result;
      } else {
        return perks[0];
      }
    });

    const lv4bgimg = computed(() => {
      const lv = perk4selectlv.value * 1;
      if (lv == 3) {
        return "very_rare";
      } else if (lv == 2) {
        return "rare";
      } else {
        return "uncommon";
      }
    });

    const perk4img = computed(() => {
      if (perk4selectpk.value != "") {
        const result = perks.find(perk => perk.ja === perk4selectpk.value);
        if (
          typeof result === "undefined" ||
          typeof result.status === "undefined"
        ) {
          return perks[0];
        }
        return result;
      } else {
        return perks[0];
      }
    });

    const perk1selectlv = ref("0");
    const perk2selectlv = ref("0");
    const perk3selectlv = ref("0");
    const perk4selectlv = ref("0");

    const perk1selectpk = ref("");
    const perk2selectpk = ref("");
    const perk3selectpk = ref("");
    const perk4selectpk = ref("");

    let ls_event_handle;
    onMounted(() => {
      ls_event_handle = window.addEventListener("storage", eventMethod);

      if (localStorage.perk1selectlv) {
        perk1selectlv.value = localStorage.perk1selectlv;
      }

      if (localStorage.perk2selectlv) {
        perk2selectlv.value = localStorage.perk2selectlv;
      }

      if (localStorage.perk3selectlv) {
        perk3selectlv.value = localStorage.perk3selectlv;
      }

      if (localStorage.perk4selectlv) {
        perk4selectlv.value = localStorage.perk4selectlv;
      }

      if (localStorage.perk1selectpk) {
        perk1selectpk.value = localStorage.perk1selectpk;
      }

      if (localStorage.perk2selectpk) {
        perk2selectpk.value = localStorage.perk2selectpk;
      }

      if (localStorage.perk3selectpk) {
        perk3selectpk.value = localStorage.perk3selectpk;
      }

      if (localStorage.perk4selectpk) {
        perk4selectpk.value = localStorage.perk4selectpk;
      }
    });

    const eventMethod = event => {
      let newVal = event.newValue;
      // let oldVal = event.oldValue;
      switch (event.key) {
        case "perk1selectlv":
          perk1selectlv.value = newVal;
          if (newVal == 0) {
            perk1selectpk.value = "";
          }
          break;

        case "perk2selectlv":
          perk2selectlv.value = newVal;
          if (newVal == 0) {
            perk2selectpk.value = "";
          }
          break;

        case "perk3selectlv":
          perk3selectlv.value = newVal;
          if (newVal == 0) {
            perk3selectpk.value = "";
          }
          break;

        case "perk4selectlv":
          perk4selectlv.value = newVal;
          if (newVal == 0) {
            perk4selectpk.value = "";
          }
          break;

        case "perk1selectpk":
          perk1selectpk.value = newVal;
          break;

        case "perk2selectpk":
          perk2selectpk.value = newVal;
          break;

        case "perk3selectpk":
          perk3selectpk.value = newVal;
          break;

        case "perk4selectpk":
          perk4selectpk.value = newVal;
          break;

        default:
          break;
      }
    };

    onUnmounted(() => {
      window.removeEventListener(ls_event_handle);
    });

    return {
      perks,
      lv1bgimg,
      perk1img,
      lv2bgimg,
      perk2img,
      lv3bgimg,
      perk3img,
      lv4bgimg,
      perk4img,
      perk1selectlv,
      perk2selectlv,
      perk3selectlv,
      perk4selectlv,
      perk1selectpk,
      perk2selectpk,
      perk3selectpk,
      perk4selectpk
    };
  }
};
</script>


<style lang="scss">
@use "sass:math";
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap");
.overlay {
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin-bottom: 20px;
      .container {
        width: 150px;
        .perkicon-box {
          position: relative;
          text-align: center;
          width: 100px;
          height: 100px;
          margin: 0 auto 10px;
          overflow: hidden;
          img {
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 100px;
          }
        }
        .ja {
          font-family: "Noto Sans JP";
          font-weight: 500;
        }
        .en {
          font-size: math.div(12, 16) * 1rem;
          font-family: "Roboto Condensed";
          font-weight: 700;
        }
      }
    }
  }
}
</style>