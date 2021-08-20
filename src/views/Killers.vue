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
              :src="require(`@/assets/perks/killers/${perk1img.id}.png`)"
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
              :src="require(`@/assets/perks/killers/${perk2img.id}.png`)"
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
              :src="require(`@/assets/perks/killers/${perk3img.id}.png`)"
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
              :src="require(`@/assets/perks/killers/${perk4img.id}.png`)"
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
import perks_json from "../assets/perks/killers/perks.json";

export default {
  setup() {
    const perks = perks_json;

    const lv1bgimg = computed(() => {
      const lv = kperk1selectlv.value * 1;
      if (lv == 3) {
        return "very_rare";
      } else if (lv == 2) {
        return "rare";
      } else {
        return "uncommon";
      }
    });

    const perk1img = computed(() => {
      if (kperk1selectpk.value != "") {
        const result = perks.find(perk => perk.ja === kperk1selectpk.value);
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
      const lv = kperk2selectlv.value * 1;
      if (lv == 3) {
        return "very_rare";
      } else if (lv == 2) {
        return "rare";
      } else {
        return "uncommon";
      }
    });

    const perk2img = computed(() => {
      if (kperk2selectpk.value != "") {
        const result = perks.find(perk => perk.ja === kperk2selectpk.value);
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
      const lv = kperk3selectlv.value * 1;
      if (lv == 3) {
        return "very_rare";
      } else if (lv == 2) {
        return "rare";
      } else {
        return "uncommon";
      }
    });

    const perk3img = computed(() => {
      if (kperk3selectpk.value != "") {
        const result = perks.find(perk => perk.ja === kperk3selectpk.value);
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
      const lv = kperk4selectlv.value * 1;
      if (lv == 3) {
        return "very_rare";
      } else if (lv == 2) {
        return "rare";
      } else {
        return "uncommon";
      }
    });

    const perk4img = computed(() => {
      if (kperk4selectpk.value != "") {
        const result = perks.find(perk => perk.ja === kperk4selectpk.value);
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

    const kperk1selectlv = ref("0");
    const kperk2selectlv = ref("0");
    const kperk3selectlv = ref("0");
    const kperk4selectlv = ref("0");

    const kperk1selectpk = ref("");
    const kperk2selectpk = ref("");
    const kperk3selectpk = ref("");
    const kperk4selectpk = ref("");

    let ls_event_handle;
    onMounted(() => {
      ls_event_handle = window.addEventListener("storage", eventMethod);

      if (localStorage.kperk1selectlv) {
        kperk1selectlv.value = localStorage.kperk1selectlv;
      }

      if (localStorage.kperk2selectlv) {
        kperk2selectlv.value = localStorage.kperk2selectlv;
      }

      if (localStorage.kperk3selectlv) {
        kperk3selectlv.value = localStorage.kperk3selectlv;
      }

      if (localStorage.kperk4selectlv) {
        kperk4selectlv.value = localStorage.kperk4selectlv;
      }

      if (localStorage.kperk1selectpk) {
        kperk1selectpk.value = localStorage.kperk1selectpk;
      }

      if (localStorage.kperk2selectpk) {
        kperk2selectpk.value = localStorage.kperk2selectpk;
      }

      if (localStorage.kperk3selectpk) {
        kperk3selectpk.value = localStorage.kperk3selectpk;
      }

      if (localStorage.kperk4selectpk) {
        kperk4selectpk.value = localStorage.kperk4selectpk;
      }
    });

    const eventMethod = event => {
      let newVal = event.newValue;
      // let oldVal = event.oldValue;
      switch (event.key) {
        case "kperk1selectlv":
          kperk1selectlv.value = newVal;
          if (newVal == 0) {
            kperk1selectpk.value = "";
          }
          break;

        case "kperk2selectlv":
          kperk2selectlv.value = newVal;
          if (newVal == 0) {
            kperk2selectpk.value = "";
          }
          break;

        case "kperk3selectlv":
          kperk3selectlv.value = newVal;
          if (newVal == 0) {
            kperk3selectpk.value = "";
          }
          break;

        case "kperk4selectlv":
          kperk4selectlv.value = newVal;
          if (newVal == 0) {
            kperk4selectpk.value = "";
          }
          break;

        case "kperk1selectpk":
          kperk1selectpk.value = newVal;
          break;

        case "kperk2selectpk":
          kperk2selectpk.value = newVal;
          break;

        case "kperk3selectpk":
          kperk3selectpk.value = newVal;
          break;

        case "kperk4selectpk":
          kperk4selectpk.value = newVal;
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
      kperk1selectlv,
      kperk2selectlv,
      kperk3selectlv,
      kperk4selectlv,
      kperk1selectpk,
      kperk2selectpk,
      kperk3selectpk,
      kperk4selectpk
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