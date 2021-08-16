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
        <div class="selector">
          <section>
            <h3>Level</h3>
            <input
              type="radio"
              name="level1"
              id="level1"
              value="0"
              v-model="perk1selectlv"
            />
            <label for="level1">None</label>
            <input
              type="radio"
              name="level1"
              id="level1"
              value="1"
              v-model="perk1selectlv"
            />
            <label for="level1">1</label>
            <input
              type="radio"
              name="level1"
              id="level1"
              value="2"
              v-model="perk1selectlv"
            />
            <label for="level1">2</label>
            <input
              type="radio"
              name="level1"
              id="level1"
              value="3"
              v-model="perk1selectlv"
            />
            <label for="level1">3</label>
          </section>
          <section>
            <h3>Perk</h3>
            <select
              class="perklist"
              type="text"
              name="perk1"
              v-model="perk1selectpk"
            >
              <template v-for="perk in perks" :key="perk.id">
                <option :value="perk.ja">{{ perk.ja }} / {{ perk.en }}</option>
              </template>
            </select>
          </section>
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
        <div class="selector">
          <section>
            <h3>Level</h3>
            <input
              type="radio"
              name="level2"
              id="level2"
              value="0"
              v-model="perk2selectlv"
            />
            <label for="level2">None</label>
            <input
              type="radio"
              name="level2"
              id="level2"
              value="1"
              v-model="perk2selectlv"
            />
            <label for="level2">1</label>
            <input
              type="radio"
              name="level2"
              id="level2"
              value="2"
              v-model="perk2selectlv"
            />
            <label for="level2">2</label>
            <input
              type="radio"
              name="level2"
              id="level2"
              value="3"
              v-model="perk2selectlv"
            />
            <label for="level2">3</label>
          </section>
          <section>
            <h3>Perk</h3>
            <select
              class="perklist"
              type="text"
              name="perk2"
              v-model="perk2selectpk"
            >
              <template v-for="perk in perks" :key="perk.id">
                <option :value="perk.ja">{{ perk.ja }} / {{ perk.en }}</option>
              </template>
            </select>
          </section>
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
        <div class="selector">
          <section>
            <h3>Level</h3>
            <input
              type="radio"
              name="level3"
              id="level3"
              value="0"
              v-model="perk3selectlv"
            />
            <label for="level3">None</label>
            <input
              type="radio"
              name="level3"
              id="level3"
              value="1"
              v-model="perk3selectlv"
            />
            <label for="level3">1</label>
            <input
              type="radio"
              name="level3"
              id="level3"
              value="2"
              v-model="perk3selectlv"
            />
            <label for="level3">2</label>
            <input
              type="radio"
              name="level3"
              id="level3"
              value="3"
              v-model="perk3selectlv"
            />
            <label for="level3">3</label>
          </section>
          <section>
            <h3>Perk</h3>
            <select
              class="perklist"
              type="text"
              name="perk3"
              v-model="perk3selectpk"
            >
              <template v-for="perk in perks" :key="perk.id">
                <option :value="perk.ja">{{ perk.ja }} / {{ perk.en }}</option>
              </template>
            </select>
          </section>
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
        <div class="selector">
          <section>
            <h3>Level</h3>
            <input
              type="radio"
              name="level4"
              id="level4"
              value="0"
              v-model="perk4selectlv"
            />
            <label for="level4">None</label>
            <input
              type="radio"
              name="level4"
              id="level4"
              value="1"
              v-model="perk4selectlv"
            />
            <label for="level4">1</label>
            <input
              type="radio"
              name="level4"
              id="level4"
              value="2"
              v-model="perk4selectlv"
            />
            <label for="level4">2</label>
            <input
              type="radio"
              name="level4"
              id="level4"
              value="3"
              v-model="perk4selectlv"
            />
            <label for="level4">3</label>
          </section>
          <section>
            <h3>Perk</h3>
            <select
              class="perklist"
              type="text"
              name="perk4"
              v-model="perk4selectpk"
            >
              <template v-for="perk in perks" :key="perk.id">
                <option :value="perk.ja">{{ perk.ja }} / {{ perk.en }}</option>
              </template>
            </select>
          </section>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, onMounted, ref, watch } from "vue";
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

    watch(perk1selectlv, newVal => {
      localStorage.perk1selectlv = newVal;
      if (newVal == 0) {
        perk1selectpk.value = "";
        localStorage.perk1selectpk = "";
      }
    });

    watch(perk2selectlv, newVal => {
      localStorage.perk2selectlv = newVal;
      if (newVal == 0) {
        perk2selectpk.value = "";
        localStorage.perk2selectpk = "";
      }
    });

    watch(perk3selectlv, newVal => {
      localStorage.perk3selectlv = newVal;
      if (newVal == 0) {
        perk3selectpk.value = "";
        localStorage.perk3selectpk = "";
      }
    });

    watch(perk4selectlv, newVal => {
      localStorage.perk4selectlv = newVal;
      if (newVal == 0) {
        perk4selectpk.value = "";
        localStorage.perk4selectpk = "";
      }
    });

    watch(perk1selectpk, newVal => {
      localStorage.perk1selectpk = newVal;
    });

    watch(perk2selectpk, newVal => {
      localStorage.perk2selectpk = newVal;
    });

    watch(perk3selectpk, newVal => {
      localStorage.perk3selectpk = newVal;
    });

    watch(perk4selectpk, newVal => {
      localStorage.perk4selectpk = newVal;
    });

    onMounted(() => {
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
      display: flex;
      margin-bottom: 20px;
      .container {
        width: 150px;
        margin-right: 50px;
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
      .selector {
        width: 150px;
        section {
          margin-bottom: 20px;
          &:last-child {
            margin-bottom: 0;
          }
        }
        h3 {
          margin-top: 0;
          margin-bottom: 10px;
        }
        .perklist {
          width: 85%;
          margin-left: auto;
          margin-right: auto;
        }
      }
    }
  }
}
</style>