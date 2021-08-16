<template>
  <div class="overlay">
    <ul>
      <li>
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
import { onMounted, ref, watch } from "vue";
import perks_json from "../assets/perks/survivors/perks.json";

export default {
  setup() {
    const perks = perks_json;

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
      .selector {
        display: flex;
        section {
          margin-right: 20px;
          &:last-child {
            margin-right: 0;
          }
        }
        h3 {
          margin-top: 0;
          margin-bottom: 10px;
        }
        .perklist {
          margin-left: auto;
          margin-right: auto;
        }
      }
    }
  }
}
</style>